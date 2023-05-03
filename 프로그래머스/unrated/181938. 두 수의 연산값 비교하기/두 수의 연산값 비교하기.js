function solution(a, b) {
    const attached = Number(String(a) + String(b));
    const calculated = 2 * a * b;
    
    return attached >= calculated ? attached : calculated;
    
    // return Number(String(a) + String(b)) >= 2 * a * b ? Number(String(a) + String(b)) : 2 * a * b;
}