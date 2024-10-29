function solution(array) {
    let answer = 0;
    
    for (i=0; i<array.length; i++) {
        const mathes = String(array[i]).match(/7/g);
        
        answer += mathes ? mathes.length : 0;
    }
    
    return answer;
}