let basket = {
    priceProducts: [3000, 5000, 1000],
    countBasketPrice: function () {
        console.log(this.priceProducts.reduce(function(sum, current) {
            return sum + current;
        }))
    }
}

basket.countBasketPrice()