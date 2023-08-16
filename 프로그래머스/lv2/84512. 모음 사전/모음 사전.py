def dictionary(data, p, length):
    if length == 6: return
    if p != '': data.append(p)
    for c in ['A', 'E', 'I', 'O', 'U']:
        dictionary(data, ''.join([p, c]), length + 1)
        
def solution(word):
    answer = 0
    data = []
    
    dictionary(data, '', 0) # 사전 순으로 단어 만들기
    
    for i in range(len(data)): # 몇 번째 단어인지 인덱스 확인
        if data[i] == word:
            answer = i + 1
            break
    
    return answer
