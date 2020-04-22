class Hamburger {
    static SIZE = {
        SIZE_SMALL: {
            name: "SIZE_SMALL",
            price: 50,
            calories: 20
        },
        SIZE_BIG: {
            name: "SIZE_BIG",
            price: 100,
            calories: 40
        }
    };
    static STUFFING = {
        STUFFING_CHEESE: {
            name: "STUFFING_CHEESE",
            price: 10,
            calories: 20
        },
        STUFFING_SALAD: {
            name: "STUFFING_SALAD",
            price: 20,
            calories: 5
        },
        STUFFING_POTATO: {
            name: "STUFFING_POTATO",
            price: 15,
            calories: 10
        }
    };
    static Topping = {
        TOPPING_SAUCE: {
            name: "TOPPING_SAUCE",
            price: 15,
            calories: 0
        },
        TOPPING_MAYO: {
            name: "TOPPING_MAYO",
            price: 20,
            calories: 5
        }
    };

    constructor(size, stuffing) {
        try {
            if (size.name !== Hamburger.SIZE[size.name].name || stuffing.name !== Hamburger.STUFFING[stuffing.name].name) {
                throw new Error("Error");
            }
            this.params = {
                size: size,
                stuffing: stuffing,
                topping: []
            }
        } catch (e) {
            alert("Ошибка при создании объекта");
        }
    }

    addTopping(topping) {
        try {
            if (topping.name !== Hamburger.Topping[topping.name].name) {
                throw new Error("Error");
            }
            let present = 0;
            for (let i = 0; i < this.params.topping.length; i++) {
                if (this.params.topping[i].name === topping.name)
                    throw new Error("Error");
            }
            this.params.topping.push(topping);
        } catch (e) {
            alert("Ошибка в добавлении добавки");
        }
    }

    calculatePrice() {
        let thisParams = this.params;
        let totalPrice;
        let mainPrice = thisParams.size.price;
        let stuffingPrice = thisParams.stuffing.price;
        let toppingPrice = 0;
        for (let i = 0; i < thisParams.topping.length; i++) {
            toppingPrice += thisParams.topping[i].price;
        }
        totalPrice = mainPrice + stuffingPrice + toppingPrice;
        return totalPrice
    };

    calculateCalories(){
        let thisParams = this.params;
        let totalCalories;
        let mainCalories = thisParams.size.calories;
        let stuffingCalories = thisParams.stuffing.calories;
        let toppingCalories = 0;
        for(let i = 0; i < thisParams.topping.length; i++){
            toppingCalories += thisParams.topping[i].calories;
        }
        totalCalories = mainCalories + stuffingCalories + toppingCalories;
        return totalCalories;
    }
}