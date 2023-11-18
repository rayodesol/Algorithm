def solution(array):
    # 방법 2 - array를 문자열로 바꾼 후, count 함수로 '7'의 개수 세기
    return str(array).count('7')

    # 방법 1 - 배열의 각 원소를 문자열로 바꾼 후, count 함수로 문자열에서 '7'의 개수를 세서 합하기
    return sum([str(num).count('7') for num in array])