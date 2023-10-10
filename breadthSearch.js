function breadthSearch(graph, start, end) {
    const queue =[];
    queue.push(start);
    while(queue.length > 0) {
        const key = queue.shift();
        if(!graph[key]) {
            graph[key] = [];
        }
        if(graph[key].includes(end)) {
            return true;
        } else {
            queue.push(...graph[key]);
        }
    }
    return false;
}