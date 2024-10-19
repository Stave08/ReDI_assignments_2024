//test for the console
console.log("Hello World!");

//create a variable that will start in cero and will keep the result every time clicking on the button. 
let counter = 0;

// this function increases the counter by 1, and keep the value in the element paragraph that I defined in the html file. 
function increment() {
    counter++;
    document.getElementById("counter").textContent = counter;
}

function decrement () {
    if (counter > 0) {
        counter --;
        document.getElementById("counter").textContent = counter; 
    }
}

//To reset the counter to 0
function resetCounter(){
    counter=0;
    document.getElementById("counter").textContent=counter;
}