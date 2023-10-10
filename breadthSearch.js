function breadthSearch(graph, start, end) {
    const queue =[];
    queue.push(start);
    while(queue.length > 0) {
        const key = queue.shift();
        if(!graph[key]) {
            graph[key] = [];
        }
        console.log('\t' + queue);
        if(graph[key].includes(end)) {
            return true;
        } else {
            console.log('1: ' +queue);
            queue.push(...graph[key]);
            console.log('2: ' +queue);
        }
    }
    return false;
}