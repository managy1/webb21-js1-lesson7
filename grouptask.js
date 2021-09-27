console.log("Hej")
const typesOfCoffee = [
    {
        type: "coffee", 
        cost: 20,
    },
    {
        type: "cappuccino",
        cost: 30,
    },
    {
        type: "latte",
        cost: 40,
    }
]
const onBuyButtonClick = () => {
    var select = document.getElementById('coffeeType');
        var coffeeType = select.options[select.selectedIndex].value;
        const quantity = document.getElementById("numberOfCoffees").value
        
        coffeePrice(coffeeType, quantity)
}
const coffeePrice = (coffeeType, quantity) => {
    for( let i = 0; i < typesOfCoffee.length; i++ ){
        if(typesOfCoffee[i].type === coffeeType){
            console.log(typesOfCoffee[i].cost)
        } 
    }
}
