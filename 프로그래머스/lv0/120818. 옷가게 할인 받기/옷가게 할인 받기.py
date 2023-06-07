import math

def solution(price):
#     # 방법 2 - for문, enumerate 사용
#     discount = [[500000, 0.8], [300000, 0.9], [100000, 0.95], [10, 1]]
    
#     for standard, calc in discount:
#         if price >= standard: return math.trunc(price * calc)
        
    # 방법 1 - if-else문
    if price >= 500000:
        return math.trunc(price * 0.8)
    elif price >= 300000: # 50만원 미만인 것 중에 30만원 이상인 것
        return math.trunc(price * 0.9)
    elif price >= 100000:
        return math.trunc(price * 0.95)
    else:
        return price