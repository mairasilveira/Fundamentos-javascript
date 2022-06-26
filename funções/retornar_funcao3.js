function somar2(a) {
    return function (b){
        return a + b;
    }
}

console.log(somar2(5)(4));