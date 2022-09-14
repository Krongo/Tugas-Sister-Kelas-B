a = [6, 7, 8, 9, 10]

function perkalian_2(Result) {
    return Result * 7;
}

function perkalian_1(Result) {
    return Result * 1;
}
const perkalian_1Array = a.map((item) => { setTimeout(() => { console.log(perkalian_1(item)) }, 1000) });
const perkalian_2Array = a.map(perkalian_2);
console.log(perkalian_2Array);