// selection elements
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');
const outputValue = document.getElementById('outputValue');
const msg = document.getElementById('message');

// calculation part 
const calculation = (event) => {
    event.preventDefault()

    weightValue = Number(weight.value);
    heightValue = ((Number(height.value))/39.3700787)*((Number(height.value))/39.3700787);
    bmiValue = weightValue/heightValue;

    if(weightValue == '' || heightValue == '') {
        alert('Provide Your Height and Weight');
        weight.value = "";
        height.value = "";
    } 
    else if(weightValue < 0 || heightValue < 0) {
        alert("please Provide a valid value")
    } else {
        outputValue.innerHTML = bmiValue.toFixed(2);

        if(bmiValue < 18.5) {
            msg.innerHTML = 'Note: Underweight';
        }
        else if(bmiValue <= 24.9) {
            msg.innerHTML = 'Note: You are normal';
        }
        else if(bmiValue <= 29.9) {
            msg.innerHTML = 'Note: Overweight';
        }
        else if(bmiValue >= 30) {
            msg.innerHTML = `Note: Obese.<br/> Special message for you: bhaire bhai apne ato muta ken!aktu hata chora korle oto paren olosh kutakar.`;
        }
    }
    
}

calculateBtn.addEventListener('click',calculation);

// Reset part 

const resetValue = (reset) => {
    reset.preventDefault();
    
        weight.value = " ";
        height.value = " ";
        outputValue.innerHTML = "_________";
        msg.innerHTML = " ";
    
}

resetBtn.addEventListener('click', resetValue);

