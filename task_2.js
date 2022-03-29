var a = [1000, 5000, 6430]
function countBasketPrice(basketPrice) {
    var sum = 0
    for (var index = 0; index < basketPrice.length; index++) {
         sum += basketPrice[index];
        
    }
    console.log(sum)
}

countBasketPrice(a)