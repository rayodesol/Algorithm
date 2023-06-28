def solution(record):
    records = [str.split(' ') for str in record]
    dic = {}
    answer = []
    
    for rec in records:
        if rec[0] == 'Enter' or rec[0] == 'Change':
            dic[rec[1]] = rec[2]
    
    for rec in records:
        if rec[0] == 'Enter':
            answer.append(dic[rec[1]] + '님이 들어왔습니다.')
        elif rec[0] == 'Leave':
            answer.append(dic[rec[1]] + '님이 나갔습니다.')
    
    return answer