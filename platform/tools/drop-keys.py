# Убрать ключи из спеки: python3 drop-keys.py <slug> key1 key2 ...
import io, json, sys, os
slug, keys = sys.argv[1], set(sys.argv[2:])
f = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'concepts') + f'/{slug}/concept.json'
j = json.load(io.open(f, encoding='utf-8'))
j['permissions'] = [p for p in j['permissions'] if p['key'] not in keys]
hits = []
def walk(o, path=''):
    if isinstance(o, dict):
        for k in list(o):
            if k in keys and k != 'permissions': hits.append(path + '.' + k); del o[k]; continue
            walk(o[k], path + '.' + k)
    elif isinstance(o, list):
        for i in range(len(o) - 1, -1, -1):
            v = o[i]
            if isinstance(v, str) and v in keys: hits.append(f'{path}[{i}]'); del o[i]
            elif isinstance(v, dict) and (v.get('key') in keys or v.get('permission') in keys): hits.append(f'{path}[{i}]{{}}'); del o[i]
            else: walk(v, f'{path}[{i}]')
walk(j)
io.open(f, 'w', encoding='utf-8').write(json.dumps(j, ensure_ascii=False, indent=2) + '\n')
print('removed:', hits)
s = io.open(f, encoding='utf-8').read()
for k in keys:
    if k in s: print('still mentions', k, [l.strip()[:110] for l in s.splitlines() if k in l][:6])
