def solution(sizes):
    return max(max(x) for x in sizes) * max(min(x) for x in sizes)
    w, h = 0, 0

    for size in sizes:
        long, short = (size[0], size[1]) if size[0] > size[1] else (size[1], size[0])
        w = max(w, long)
        h = max(h, short)
    
    return w * h