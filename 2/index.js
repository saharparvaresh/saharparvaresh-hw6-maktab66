const mySortFunc = () => {
    let a = [-1, 150, 190, 170, -1, -1, 160, 180];
    let indexarr = [];
    a.map((v, i) => {
        if (v == -1) {
            indexarr.push(i);
        }
    })
    a.sort((c, b) => {
        return c - b;
    })
    a.splice(0, indexarr.length);
    for (const j of indexarr) {
        a.splice(j, 0, -1)
    }
    console.log(a);

}

mySortFunc()