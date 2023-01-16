function Sorteio(){
    var num = [];
    var stars = [];

    // numbers
    do {
        for (let i = 0; i <= 4; i++) {
            let a = Math.ceil(Math.random() * (51 - 1) + 1)
            num[i] = a;
            console.log(num[i]);
        }
    } while (num.length !== new Set(num).size);
    
    console.log(num);

    do {
        for (let i = 0; i <= 1; i++) {
            let a = Math.ceil(Math.random() * (12 - 1) + 1)
            stars[i] = a;
            console.log(stars[i]);
        }
    } while (stars.length !== new Set(stars).size);
    
    console.log(stars);

    document.getElementById("num1").innerHTML = num[0];
    document.getElementById("num2").innerHTML = num[1];
    document.getElementById("num3").innerHTML = num[2];
    document.getElementById("num4").innerHTML = num[3];
    document.getElementById("num5").innerHTML = num[4];

    document.getElementById("star1").innerHTML = stars[0];
    document.getElementById("star2").innerHTML = stars[1];
}

window.onload = function() {
    Sorteio();
};

