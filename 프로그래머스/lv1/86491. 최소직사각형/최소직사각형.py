def solution(sizes):
    # 방법 2
    return max([max(size) for size in sizes]) * max([min(size) for size in sizes])

#     # 방법 1
#     w, h = 0, 0

#     for size in sizes:
#         long, short = (size[0], size[1]) if size[0] > size[1] else (size[1], size[0])
#         w = max(w, long)
#         h = max(h, short)
    
#     return w * h