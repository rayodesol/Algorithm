function solution(arr, intervals) {
    let s1, e1, s2, e2;
    [s1, e1] = intervals[0];
    [s2, e2] = intervals[1];
    
    return [...arr.slice(s1, e1 + 1), ...arr.slice(s2, e2 + 1)];
}