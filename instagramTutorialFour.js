//Hello World!
//Today we are going to learn about filter()

const meals = [
    { name: "Hamburger", vegetarian: false },
    { name: "Pasta", vegetarian: true },
    { name: "Pizza", vegetarian: false },
    { name: "Salad", vegetarian: true },
]

//Why do we use filter()?
//We use filter when we want to....

//filter return whatever is true
//For example, I want an array of vegetarian meal
const vegetarianMeals = meals.filter(data => data.vegetarian)
console.log(vegetarianMeals)
