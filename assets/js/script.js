// Button to generate password
var generateBtn = document.querySelector("#generate");


// Prompts to collect user preferences

// Choose password length 8 - 128 characters
generateBtn.addEventListener('click', function(){
  var lengthPrompt = prompt('Choose a length for your password. Must be between 8-128 characters');
  if (lengthPrompt !=null) {
    document.getElementById('length').innerHTML = 'Password Length: ' + lengthPrompt;
  }
  if (lengthPrompt <= 7) {
    alert('Password must be between 8-128 characters');
    document.getElementById('length').innerHTML = '';
  } else if (lengthPrompt >= 129) {
    alert('Password must be between 8-128 characters');
    document.getElementById('length').innerHTML = '';
  } else if (isNaN(lengthPrompt)) {
    alert('Only numbers can be entered for password length');
  } else {

    // Collect user's preferences and display on page

    // Choose Uppercase
    var upperPrompt = confirm('Do you want to include uppercase letters? Click OK to include uppercase or cancel to get more options.');
    if (upperPrompt !=null) {
      document.getElementById('upper').innerHTML = 'Include Uppercase Letters: ' + upperPrompt;
    }

    // Choose Lowercase
    var lowerPrompt = confirm('Do you want to include lowercase letters? Click OK to include lowercase letters or cancel to get more options.');
    if (lowerPrompt !=null) {
      document.getElementById('lower').innerHTML = 'Include Lowercase Letters: ' + lowerPrompt;
    }

    // Choose Numbers
    var numberPrompt = confirm('Do you want to include numbers? Click OK to include numbers or cancel to get more options.');
    if (numberPrompt !=null) {
      document.getElementById('numbers').innerHTML = 'Include Numbers: ' + numberPrompt;
  

    // Choose Special Characters
    var specialsPrompt = confirm('Do you want to include special characters? Click OK to include special characters or cancel to ignore special Characters and move to the next screen.');
    if (specialsPrompt !=null) {
      document.getElementById('specials').innerHTML = 'Include Special Characters: ' + specialsPrompt;
    }


    // Confirm prompt to generate password
    confirm('Click OK to generate your password or Cancel to start over');


    // These if statements will create a new variable based on user's choices


    // Add uppercase to password
      if(upperPrompt === true){
        var newUpperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      } else {
        var newUpperString = '';
      }

      // Add lowercase to password
      if(lowerPrompt === true){
        var newLowerString = 'abcdefghijklmnopqrstuvwxyz';
      } else {
        var newLowerString = '';
      }

      //Add numbers to password
      if(numberPrompt === true){
        var newNumberString = '0123456789';
      } else {
        var newNumberString = '';
      }

      //Add special Characters to password
      if(specialsPrompt === true){
        var newSpecialsString = '!@#$%^&*()?{}';
      } else {
        var newSpecialsString = '';
      }


      // Displays password options on the webpage
      document.getElementById('holdValues').style.visibility = 'visible';
      

      // Function to create the secure password
      function createPassword(length) {
        var securePassword = '';
        // This variable concatenates true responses from user inputs to create a new string with selected options 
        var newPasswordString = newUpperString + newLowerString + newNumberString + newSpecialsString;
        var newPasswordStringLength = newPasswordString.length;
        for ( var i = 0; i < length; i++ ) {
          securePassword += newPasswordString.charAt(Math.floor(Math.random() * newPasswordStringLength));
        }
        return securePassword;
      }

      // Writes password to the textbox
      document.getElementById('password').innerHTML = (createPassword(lengthPrompt));

      // Displays message in text box to include at least one character
      if(document.getElementById('password').innerHTML === '') {
        document.getElementById('password').innerHTML = 'Your password must include at least one character. Click the Generate Password button to choose your options.';
      }
   
      
  }
  
};


})
