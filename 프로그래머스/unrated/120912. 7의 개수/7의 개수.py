def solution(array):
    # 배열의 각 원소를 문자열로 바꾼 후, count 함수로 문자열에서 7의 개수를 세서 합하기
    return sum([str(num).count('7') for num in array])