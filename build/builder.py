import re
import json

# 1. Tentar ler o arquivo antigo para resgatar Level e Type
antigo_types_levels = {}
try:
    with open('cards-data_antigo.js', 'r', encoding='utf-8') as f:
        content = f.read()
        matches = re.findall(r"id:['\"](\d{3})['\"].*?level:(\d+),.*?type:['\"](.*?)['\"]", content)
        for m in matches:
            antigo_types_levels[m[0]] = {'level': int(m[1]), 'type': m[2]}
except FileNotFoundError:
    pass

nova_lista = []
linhas_com_erro = []

# 2. Ler o arquivo de texto bruto (dump)
with open('dump_cartas.txt', 'r', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        if not line: continue
        
        # Regex flexível: ignora espaços extras e aceita vazios em ATK/DEF
        match = re.search(r'^(\d{3})\s+(.*?)\s+-\s+([0-9\s]*)/?([0-9\s]*)\s+-\s+(.*?)$', line)
        
        if match:
            id_carta = match.group(1)
            nome = match.group(2).strip()
            
            # Tratando ATK e DEF
            atk_str = match.group(3).strip()
            def_str = match.group(4).strip()
            atk = int(atk_str) if atk_str.isdigit() else 0
            def_ = int(def_str) if def_str.isdigit() else 0
            
            # Tratando Password e Cost separando por espaço
            pass_cost = match.group(5).split()
            password = ""
            cost = 0
            
            if len(pass_cost) >= 2:
                password = pass_cost[0]
                cost = int(pass_cost[-1])
            elif len(pass_cost) == 1:
                val = pass_cost[0]
                if len(val) == 8:
                    password = val
                else:
                    cost = int(val)
                    
            antigo_dados = antigo_types_levels.get(id_carta, {'level': 0, 'type': ''})
            
            card_obj = {
                'id': id_carta,
                'name': nome,
                'atk': atk,
                'def': def_,
                'level': antigo_dados['level'],
                'type': antigo_dados['type'],
                'password': password,
                'cost': cost
            }
            nova_lista.append(card_obj)
        else:
            linhas_com_erro.append(line)

# 3. Escrever o novo arquivo JS usando json.dumps (Escapa aspas e erros automaticamente)
with open('cards-data.js', 'w', encoding='utf-8') as f:
    f.write("const cardsData = ")
    f.write(json.dumps(nova_lista, indent=2, ensure_ascii=False))
    f.write(";\n")

# 4. Relatório
print(f"Sucesso! cards-data.js gerado com {len(nova_lista)} cartas de forma segura.")