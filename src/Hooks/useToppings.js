import { useState } from 'react'

export function useToppings(defaultTopping) {
    const [toppings, setToppings] = useState(defaultTopping || getDeffaultToppings())

    function checkTopping(index) {
        const newToppings = [...toppings]
        newToppings[index].checked = !newToppings[index].checked
        setToppings(newToppings)
    }

    return {
        checkTopping,
        toppings
    }
}

const toppingsList = [
    "Extra Cheese",
    "Pepperoni",
    "Sausage",
    "Onions",
    "Peppers",
    "Pineapple",
    "Ham",
    "Spinach",
    "Artichokes",
    "Mushrooms",
    "Anchovies"
]

function getDeffaultToppings() {
    return toppingsList.map(topping => ({
        name: topping,
        checked: false
    }))
}