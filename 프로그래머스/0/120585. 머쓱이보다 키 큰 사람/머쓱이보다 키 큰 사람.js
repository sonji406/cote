function solution(array, height) {
    let answer = 0;
    const heights = [...array].filter((num) => num > height);
    
    answer = heights.length;
    
    return answer;
}