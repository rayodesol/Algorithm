process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const input = data.split(" ");
    const n = Number(input[0]), m = Number(input[1]);
    
    // 방법 2 - for문 1번
    const width = "*".repeat(n) // repeat 함수로 1줄로 출력되는 가로 * 만들기
    
    // for문으로 m번 반복하면서 1줄씩 출력
    for (let i = 0; i < m; i++) {
        console.log(width)
    }
    
    // // 방법 1 - 이중 for문
    // // m이 행의 개수(세로 길이), n이 열의 개수(가로 길이)
    // for (let i = 0; i < m; i++) {
    //     for (let j = 0; j < n; j++) {
    //         process.stdout.write("*") // 줄 바꿈 없이 출력
    //     }
    //     console.log() // 줄 바꿈
    // }
});