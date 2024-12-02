console.log ("Hello World");

let proteins = ['--','Pork','Ground meat', 'Chicken breast', 'Salmon','Burger meat','Beef','Shrimp','Goulash', 'Chicken tights', 'Tuna', 'Sardines'];
    console.log(proteins);
    console.log(proteins.length);

let veggies = ['--','Carrot', 'Broccoli', 'Cauliflower', 'Radish', 'Eggplant', 'Zuchinni', 'Spinach', 'Lettuce', 'Cherry Tomato', 'Pumpkin', 'Mushrooms', 'Cucumber', 'Beet'];
    console.log(veggies);
    console.log(veggies.length); 

let carbos = ['Rice', 'Quinoa', 'Pasta', 'Potato', 'Red bean', 'Lentils'];
    console.log(carbos);
    console.log(carbos.length);

let list_recipes = window.recipes;

console.log(list_recipes[0]);

// creating SECTION MEAL - PLAN
const body = document.body;

const section = document.createElement('section');
body.append(section);    
section.setAttribute('class', 'meal-plan');
section.setAttribute('id', 'section4');

//title "My Weekly Meals"
const weeklyMeals = document.createElement('h2')
section.append(weeklyMeals);
weeklyMeals.setAttribute('class', 'weekly-tittle');
weeklyMeals.textContent = 'Plan my weekly meals';    
const instructions = document.createElement('h3');
section.append(instructions);
instructions.textContent = "Here's how it works:"

const steps1 = document.createElement('p');
section.append(steps1);
steps1.textContent = '1. Choose your protein: Select three protein options from the dropdown list.';
const steps2 = document.createElement('p');
section.append(steps2);
steps2.textContent = '2. Choose your vegetables: Select four vegetable options from the dropdown list.';
const steps3 = document.createElement('p');
section.append(steps3);
steps3.textContent = '3. Generate your meal plan: Click the "Generate Meal Plan" button.';
const conclusion = document.createElement('p');
section.append(conclusion);
conclusion.textContent = 'Your personalized meal plan will be generated, providing you with a list of meal ideas to incorporate during your week';

// //Creating paragraphs 
// for (let f=0; f<=1 ;f++) {
//     const steps = document.createElement('p');
//     section.append(steps);
//     steps.classList.add ('par-steps');
//     steps.setAttribute('class', 'par-steps');
//     if (f == 0) {
//         steps.textContent = 'Step 1. Choose the days of the week for week you want to plan a meal.';
//     }
//     else {
//         steps.textContent = 'Step 2. Choose three proteins for your week and four vegetables';
//     }
// }

//creating the division and container for the titles
const containTitle = document.createElement('div');
section.append(containTitle);
containTitle.setAttribute('class', 'title-container');
for (let h = 0; h<=1; h++) {
    const category = document.createElement('div');
    containTitle.append(category);
    category.setAttribute ('class', 'title');
    if (h==0){
        category.textContent = 'Protein';
    }
    else {
        category.textContent = 'Vegetables';
    }   
}

//creating the division to select nutrients
const nutriSel = document.createElement('div');
section.append(nutriSel);
nutriSel.setAttribute('class', 'Selection');

function createDivs(threshold, box_name) {
    // creating the division to select nutrients
    const div = document.createElement('div');
    nutriSel.append(div);
    div.setAttribute('class', box_name);

    //creating the diferent options in each container
    for (let i=0; i <= threshold; i++){ 
        // creating the label that appear before the dropdown list
        const label = document.createElement('label');
        div.append(label);
        label.setAttribute('class', 'option-label');  
        label.textContent = 'Option ' + (i+1);

        //dropdown list
        const select = document.createElement('select');
        div.append(select);
        select.setAttribute('id', 'option-dropdown');

        //read each element of the array of proteins and assign it to every item of the dropdown list
        if (box_name == 'Protein'){
            for (let j=0; j <= proteins.length-1; j++) {
                const option = document.createElement('option');
                select.append(option);
                option.setAttribute('value', 'item-1');
                option.textContent = proteins[j];            
            }
        }
        else if (box_name == 'Vegetables'){
            for (let j=0; j <= veggies.length-1; j++) {
                const option = document.createElement('option');
                select.append(option);
                option.setAttribute('value', 'item-1');
                option.textContent = veggies[j];            
            }
        }
    }
    
}

createDivs(2, 'Protein');
createDivs(3, 'Vegetables');

//KEEP THE USER CHOICES 

// GENERATE MEAL PLAN-BUTTON
const containButton = document.createElement('div');
section.append(containButton);
containButton.setAttribute('class', 'button-container');
const mealButton = document.createElement('button');
containButton.append(mealButton);
mealButton.setAttribute('id', 'meal-button');
mealButton.textContent = 'Generate Meal Plan';

//CREATING DIVISION FOR PRINTING THE RESULT
const result = document.createElement('div');
section.append(result);
result.setAttribute('class', 'result-div');
// result.textContent = "This is the result container"; 

//saving the user options and keep it in an object 
mealButton.addEventListener('click', function() {
    
    const selectedIngredients = {
        proteins: [],
        vegetables: []
    };
    
    const selectElements = document.querySelectorAll('.Protein select');
        
        // Iterate over each select element
        selectElements.forEach(select => {
            const selectedOption = select.options[select.selectedIndex];
            const selectedProtein = selectedOption.text;
            selectedIngredients.proteins.push(selectedProtein);
        })
        console.log(selectedIngredients.proteins);
        
    const selectVeggies = document.querySelectorAll('.Vegetables select');
        
        // Iterate over each select element
        selectVeggies .forEach(select => {
            const selectedOption = select.options[select.selectedIndex];
            const selectedVeggie  = selectedOption.text;
            selectedIngredients.vegetables.push(selectedVeggie);
        })
        console.log(selectedIngredients.vegetables);

    function filterRecipes(selectedIngredients, list_recipes) {
        return list_recipes.filter(recipe => {
           return selectedIngredients.proteins.some(protein => recipe.Protein.includes(protein)) || selectedIngredients.vegetables.some(vegetable => recipe.Vegetables.includes(vegetable));
            
        });
    }

    const filteredRecipes = filterRecipes(selectedIngredients, list_recipes);
    console.log(filteredRecipes);

    if (filteredRecipes.length === 0){
            result.textContent =  "Please select at least one protein or vegetable";
            // console.log("hello");
    } else {
        result.textContent =  "";
        const list = document.createElement('ul');
        result.append(list);
        list.setAttribute('class', 'un-list');

        const elements = document.getElementsByClassName('un-list');
            for (let k = 0; k < elements.length; k++) {
                // elements[k].style.listStyleType = "none";
                elements[k].textContent = "";
            }

            for (let l= 0; l <= filteredRecipes.length -1; l++) { 
                const bulletPoint = document.createElement('li');
                list.append(bulletPoint);
                bulletPoint.setAttribute('class', 'list-elements');
                bulletPoint.textContent = filteredRecipes[l].Name;
            }    
    }
    
  });

//  CREATING THE FOOTER
const footer = document.createElement('footer');
body.append(footer);
const footTitle = document.createElement("h3");
footer.append(footTitle);
footTitle.textContent = "FINAL PROJECT"

const newParagraph1 = document.createElement('p');
newParagraph1.textContent = 'Front-end development course';
footer.append(newParagraph1);

const newParagraph2 = document.createElement('p');
newParagraph2.textContent = 'Maria Alejandra Ramirez';
footer.append(newParagraph2);

const newParagraph3 = document.createElement('p');
newParagraph3.textContent = ' ReDI School Copenhagen';
footer.append(newParagraph3);

const newParagraph4 = document.createElement('p');
newParagraph4.textContent = 'December 2024';
footer.append(newParagraph4);