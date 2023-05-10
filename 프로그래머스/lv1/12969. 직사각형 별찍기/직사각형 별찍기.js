process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const input = data.split(" ");
    const n = Number(input[0]), m = Number(input[1]);
    
    // m이 행의 개수(세로 길이), n이 열의 개수(가로 길이)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            process.stdout.write("*") // 줄 바꿈 없이 출력
        }
        console.log() // 줄 바꿈
    }
});