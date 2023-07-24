def solution(s):
    # 방법 2
    return ' '.join(map(lambda x: ''.join([ch.lower() if i % 2 else ch.upper() for i, ch in enumerate(x)]), s.split(' ')))

#     # 방법 1
#     words = s.split(' ')
    
#     for i in range(len(words)):
#         words[i] = ''.join([ch.lower() if idx % 2 else ch.upper() for idx, ch in enumerate(words[i])])
    
#     return ' '.join(words)
        