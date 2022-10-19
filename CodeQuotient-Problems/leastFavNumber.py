from collections import defaultdict


def leastFavorite(favorites, n):
    cache = {}
    for i in favorites:
        if i not in cache:
            cache[i] = 1
        else:
            cache[i] += 1
    cache = dict(sorted(cache.items(), key=lambda x:x[1]))
    _min = min(cache.values())
    _max = 0
    for i in cache.keys():
        if cache[i] == _min:
            _max = max(_max, i)
    print(_max)

leastFavorite([5, 4, 3, 5, 3, 5, 4], 7)