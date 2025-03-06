const output = document.getElementById('outPut');

output.style.fontSize = "24px";  
output.style.color = "white";  
output.style.minHeight = "50px"; 

let currentInput = "";

const buttons = document.querySelectorAll('h2');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        let value = this.innerText;

        if (value === '=') {
            try {
                currentInput = eval(currentInput);
                output.innerText = currentInput;
            } catch (error) {
                output.innerText = "Error";
                currentInput = "";
            }
        } else if (value === 'C') {
            currentInput = "";
            output.innerText = "";
        } else if (value === 'CE') {
            currentInput = currentInput.slice(0, -1);
            output.innerText = currentInput;
        } else {
            currentInput += value;
            output.innerText = currentInput;
        }
    });
});
