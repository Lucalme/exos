function suites2(chf){
    let suites = []
    for(let i = 2 ; i <= Math.ceil(chf)/2 ; i += 0.5) {
        if(chf % i == 0){
            if(i - (chf/i) > -i) {suites.push([i, chf/i])}
            console.log([i, chf/i])
        }
    }
    console.log(suites)
}