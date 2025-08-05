function solution(sizes) {
    let [maxW, maxH] = sizes[0];
    for(let i=1; i<sizes.length; i++){
        if(maxW > maxH){
            if(sizes[i][0] < sizes[i][1]){
                sizes[i].reverse();
            }
        } else{
            if(sizes[i][0] > sizes[i][1]){
                sizes[i].reverse();
            }
        }
        
        const [w, h] = sizes[i];
        if(maxW < w){
            maxW = w;
        }
        if(maxH < h){
            maxH = h;
        }
    }
    var answer = maxW * maxH;
    return answer;
}