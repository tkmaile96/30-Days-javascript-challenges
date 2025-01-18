function validatePassword() {
    let input = document.getElementById('passwordInput').value;

    
    let result = ''; 

    
    const expression = new RegExp('Get_\\d{2}[A-Za-z]+$');



     
     if (expression.test(input)) {
        result = "Valid Password ☑️"
     } else {
        result = "Invalid Password ❌"
     }

         document.getElementById('result').innerText = result;

    
}

//function to clear the input
function clearInput() {
    document.getElementById("passwordInput").value = ''; 
    
}

// An Event listener for when 'enter' is pressed
document.getElementById('passwordInput').addEventListener ('keypress', function(event) {
    if (event.key === 'Enter') {
        validatePassword();
    }
});

