from collections import deque

def solution(cacheSize, cities):
    # 큐 앞쪽은 오랫동안 사용하지 않은 것, 뒤쪽은 최근에 사용한 것으로 간주
    queue = deque(maxlen = cacheSize)   # 큐의 최대 길이 설정. 최대 길이 넘으면 맨 앞 삭제.
    time = 0    # 실행시간
    
    # 캐시 크기가 0이면, 도시 수만큼 cache miss 발생
    if cacheSize == 0:
        return len(cities) * 5
    
    for city in cities:
        city = city.lower() # 소문자로 바꾸기
        
        if city in queue:   # 캐시(큐)에 있으면, 캐시에서 지우고, 시간 1 추가(cache hit)
            queue.remove(city)
            time += 1
        else:               # 캐시(큐)에 없으면, 시간 5 추가(cache miss)
            time += 5
        
        queue.append(city)  # 맨 뒤에 추가. 최대 길이 넘으면 맨 앞 삭제.
        
    return time