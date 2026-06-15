import re

with open('cards-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Count all card IDs
ids = re.findall(r"id:'(\d{3})'", content)
print(f'Total card entries found: {len(ids)}')
if ids:
    print(f'First: {ids[0]}, Last: {ids[-1]}')

# Check for gaps
ids_int = sorted([int(x) for x in ids])
expected = list(range(1, 723))
missing = set(expected) - set(ids_int)
duplicates = [x for x in ids_int if ids_int.count(x) > 1]
if missing:
    print(f'MISSING IDs: {sorted(missing)}')
else:
    print('No missing IDs - all 722 present!')
    
if duplicates:
    print(f'DUPLICATE IDs: {sorted(set(duplicates))}')
else:
    print('No duplicate IDs!')

# Card-Type distribution
def get_card_type(n):
    if 1 <= n <= 300: return 'Monster'
    if 301 <= n <= 319: return 'Equip'
    if n == 320: return 'Magic'
    if 321 <= n <= 328: return 'Equip'
    if n == 329: return 'Magic'
    if 330 <= n <= 335: return 'Field'
    if 336 <= n <= 350: return 'Magic'
    if 351 <= n <= 650: return 'Monster'
    if 651 <= n <= 652: return 'Equip'
    if n == 653: return 'Magic'
    if n == 654: return 'Equip'
    if 655 <= n <= 656: return 'Magic'
    if 657 <= n <= 659: return 'Equip'
    if 660 <= n <= 664: return 'Magic'
    if 665 <= n <= 667: return 'Ritual'
    if n == 668: return 'Equip'
    if n == 669: return 'Magic'
    if 670 <= n <= 671: return 'Ritual'
    if n == 672: return 'Magic'
    if 673 <= n <= 680: return 'Ritual'
    if 681 <= n <= 690: return 'Trap'
    if 691 <= n <= 700: return 'Ritual'
    if 701 <= n <= 720: return 'Monster'
    if n == 721: return 'Ritual'
    if n == 722: return 'Monster'
    return 'Unknown'

counts = {}
for i in range(1, 723):
    ct = get_card_type(i)
    counts[ct] = counts.get(ct, 0) + 1

print('\nCard-Type distribution:')
for ct in ['Monster','Equip','Magic','Field','Ritual','Trap']:
    print(f'  {ct}: {counts.get(ct, 0)}')
print(f'  TOTAL: {sum(counts.values())}')
