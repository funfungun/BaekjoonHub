function solution(tickets) {
    var answer = [];
    const n = tickets.length;
    const visited = Array(n).fill(false);
    tickets.sort();
    
    function dfs(start, path){
        if(path.length === n+1){
            answer.push(...path);
            return true;
        }
        
        for(let i=0; i<n; i++){
            if(!visited[i] && tickets[i][0] === start){
                visited[i] = true;
                path.push(tickets[i][1]);
                
                if(dfs(tickets[i][1], path)){
                    return true;
                }
                
                visited[i] = false;
                path.pop();
            }
        }
        
        return false;
    }
    
    dfs("ICN", ["ICN"]);
    
    return answer;
}