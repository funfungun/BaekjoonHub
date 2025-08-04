function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    const scores = patterns.map((pattern) => answers.filter((answer, idx) => answer === pattern[idx % pattern.length]).length);
    const maxScore = Math.max(...scores);
    
    const output = [];
    for(let i=0; i<scores.length; i++){
        if(scores[i] === maxScore){
            output.push(i+1);
        }
    }
    return output;
}