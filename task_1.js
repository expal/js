let a = 15

function abc(numb) {
    let b = {}
    if (numb <= 0 || numb > 999) {
        console.log("Число не входит в диапазон")
        return b   
    }
    b = {единицы: numb % 10,
    десятки: Math.floor(numb % 100 / 10),
    сотни: Math.floor(numb / 100)}
    return b
}

console.log(abc(a))