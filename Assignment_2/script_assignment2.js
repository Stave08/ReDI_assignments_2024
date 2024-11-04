//test for the console
console.log("Hello World!");

//create a variable that will start in cero and will keep the result every time clicking on the button. 
let counter = 0;

// this function increases the counter by 1, and keep the value in the element paragraph that I defined in the html file. 
function increment() {
    counter++;
    document.getElementById("counter").textContent = counter;

    document.getElementById('decrement').disabled = false;
    document.getElementById('decrement').style.backgroundColor = '';
    
    // Show the message "You have free shipping"
    if (counter >= 10 && counter < 20) {
    document.getElementById("message").style.display = 'block';
  } else {
    document.getElementById("message").style.display = 'none';
  }

    //button in red when reaches 20, and disable the button 
    if (counter === 20) {
        document.getElementById("increment").disabled = true;
        document.getElementById('increment').style.backgroundColor = 'red';
        document.getElementById("stock").style.display = 'block';
    }

         
}

function decrement () {
    if (counter > 0) {
        counter --;
        document.getElementById("counter").textContent = counter;
    }

    // Disable the decrement button if the value reaches 0
    if (counter === 0) {
        document.getElementById("decrement").disabled = true;
        document.getElementById('decrement').style.backgroundColor = 'gray';
    }

    // Remove free shipping message if value drops below 10 
    if (counter < 10) {
    document.getElementById("message").style.display = 'none';
    } else {
        document.getElementById("message").style.display = 'block';
    }

    if (counter < 20) {
        document.getElementById("stock").style.display = 'none';
    }

    //reset the backgroundcolor of the button
    document.getElementById('increment').style.backgroundColor = '';

    //Reset the button + if the counter <20
    document.getElementById('increment').disabled = false;
    document.getElementById('increment').style.backgroundColor = '';
}

//To reset the counter to 0
function resetCounter(){
    counter=0;
    document.getElementById("counter").textContent=counter;
    document.getElementById("stock").style.display = 'none';
    document.getElementById("message").style.display = 'none';
}


