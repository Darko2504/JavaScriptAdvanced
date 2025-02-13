function fetchApi(){
    const url = `https://dummyjson.com/recipes`;
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(recipe){
        const desserts = recipe.recipes.filter(r => r.mealType.includes(`Dessert`));
        console.log(desserts);
        const namesOfRecipes = recipe.recipes.filter(r => r.reviewCount > 30).map((p => p.name));
        console.log(namesOfRecipes);
        const cinnamon = recipe.recipes.filter(r => r.ingredients.includes(`Cinnamon`));
        console.log(cinnamon);
        const lunchDinner = recipe.recipes.filter(r => r.mealType.includes(`Dinner`) && r.mealType.includes(`Lunch`))
        console.log(lunchDinner);
        const mangoSalsa = recipe.recipes.filter(r => r.name === `Mango Salsa Chicken`).map(r => r.ingredients)
        console.log(mangoSalsa);
        const averageCalories = recipe.recipes.filter(r => r.cuisine === `American`);
        console.log(`There is only 1 american cuisine recipe`, averageCalories);
        const pastaRecipes = recipe.recipes.filter(r => r.name.includes(`Pasta`));
        console.log(pastaRecipes.reduce((acc, curr) => acc + curr.cookTimeMinutes, 0) / pastaRecipes.length);
        const lowestReviews = recipe.recipes.sort((a, b) => a.reviewCount - b.reviewCount);
        console.log(lowestReviews[0]);
        
    })
}
fetchApi()