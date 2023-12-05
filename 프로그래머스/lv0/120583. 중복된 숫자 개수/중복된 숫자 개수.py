def solution(array, n):
    # 방법 2 - count 함수
    return array.count(n)

    # # 방법 1 - filter 함수로 n과 같은 원소들을 가진 배열의 길이를 리턴
    # return len(list(filter(lambda x : x == n, array)))
