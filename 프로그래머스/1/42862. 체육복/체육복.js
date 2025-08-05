function solution(n, lost, reserve) {
    const same = lost.filter((l) => reserve.includes(l));
    lost = lost.filter((l) => !same.includes(l)).sort((a,b) => a-b);
    reserve = reserve.filter((r) => !same.includes(r)).sort((a,b) => a-b);
    
    for(let i=0; i<reserve.length; i++){
        const num = reserve[i];
        const idx = lost.findIndex((l) => Math.abs(l-num) === 1);
        if(idx !== -1){
            lost.splice(idx, 1);
        }
    }
    
    return n - lost.length;
}