export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/pizza.png',
        section: 'Pizza'
    },
    {
        name: 'Pepperoni Pizza',
        img: '/img/pizza2.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Chicken Pizza',
        img: '/img/chicken-pizza.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Veggie Pizza',
        img: '/img/healthy-pizza.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Burger',
        img: '/img/burger.jpeg',
        section: 'Sandwich'
    },
    {
        name: 'Gyro',
        img: '/img/gyro.jpeg',
        section: 'Sandwich'
    },
    {
        name: 'Shrimp PoBoy',
        img: '/img/sandwich.jpeg',
        section: 'Sandwich'
    },
    {
        name: 'Fries',
        img: '/img/fries.jpeg',
        section: 'Sides'
    }
]

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]) {
        res[food.section] = []
    }
    res[food.section].push(food)
    return res
}, {})