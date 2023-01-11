function suite(nmbre){
    let mid = Math.ceil(nmbre / 2)
    let suites = []

    for(let i = 1 ; i <= mid ; i++){
        let total = 0;
        let suite = []
        for( let j = i ; j <= mid ; j++){
            suite.push(j);
            total += j ;
            if (total == nmbre){
                suites.push(suite)
                break;
            }
            if (total > nmbre){
                break;
            }
        }
    }
    console.log(suites)
}