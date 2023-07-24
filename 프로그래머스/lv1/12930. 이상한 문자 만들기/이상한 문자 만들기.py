def solution(s):
    words = s.split(' ')
    
    for i in range(len(words)):
        words[i] = ''.join([ch.lower() if idx % 2 else ch.upper() for idx, ch in enumerate(words[i])])
    
    return ' '.join(words)
        