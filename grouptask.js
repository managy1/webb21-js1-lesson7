console.log("Hej")
const onBuyButtonClick = () => {
    var select = document.getElementById('coffeeType');
        var value = select.options[select.selectedIndex].value;
        const input = document.getElementById("numberOfCoffees").input
        
        console.log(value, input); 
}