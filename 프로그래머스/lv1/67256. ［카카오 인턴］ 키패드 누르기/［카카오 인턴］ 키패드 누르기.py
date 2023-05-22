def solution(numbers, hand):
    # 시작점 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, *, #]
    upTo2 = [3, 1, 0, 1, 2, 1, 2, 3, 2, 3, 4, 4]
    upTo5 = [2, 2, 1, 2, 1, 0, 1, 2, 1, 2, 3, 3]
    upTo8 = [1, 3, 2, 3, 2, 1, 2, 1, 0, 1, 2, 2]
    upTo0 = [0, 4, 3, 4, 3, 2, 3, 2, 1, 2, 1, 1]
    
    ans = ""
    l = 10 # "*"
    r = 11 # "#"
    
    for num in numbers:
        if num == 1 or num == 4 or num == 7:
            ans += "L"
            l = num
        elif num == 3 or num == 6 or num == 9:
            ans += "R"
            r = num
        elif num == 2:
            if upTo2[l] < upTo2[r]:
                ans += "L"
                l = num
            elif upTo2[l] > upTo2[r]:
                ans += "R"
                r = num
            else:
                if hand == "left":
                    ans += "L"
                    l = num
                else:
                    ans += "R"
                    r = num
        elif num == 5:
            if upTo5[l] < upTo5[r]:
                ans += "L"
                l = num
            elif upTo5[l] > upTo5[r]:
                ans += "R"
                r = num
            else:
                if hand == "left":
                    ans += "L"
                    l = num
                else:
                    ans += "R"
                    r = num
        elif num == 8:
            if upTo8[l] < upTo8[r]:
                ans += "L"
                l = num
            elif upTo8[l] > upTo8[r]:
                ans += "R"
                r = num
            else:
                if hand == "left":
                    ans += "L"
                    l = num
                else:
                    ans += "R"
                    r = num
        else:
            if upTo0[l] < upTo0[r]:
                ans += "L"
                l = num
            elif upTo0[l] > upTo0[r]:
                ans += "R"
                r = num
            else:
                if hand == "left":
                    ans += "L"
                    l = num
                else:
                    ans += "R"
                    r = num
            
    return ans