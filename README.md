# Random Password Generator

----

![project screenshot](/assets/img/screenshot1.jpg)

link to deployed project: https://jaychapman.github.io/passwordGenerator/

## About This Project

This is a random password generator using JavaScritpt as the programming language. When the user is presented with the initial screen, they are presented with instructions for creating the password. The user will click the generate password button and a prompt comes up to ask for the length of the password. It must be between 8-128 characters long and contain only numbers. After the user chooses a password length they are prompted for which characters to include in their password. The options are uppercase letters, lowercase letters, numbers and special characters. The user can choose a combination of any of these options. When all options are selected the user receives the final prompt to create password. The password is then written to a read-only textbox and they can highlight and copy their new secure password. The webpage will also display the options that the user has chosen on the screen. If they haven't selected any characters the generator will return a message in the textbox informing the user that they must choose at least one option and the user has the ability to start the process over.

------

## How I Created the Password Generator

I began this project by using comments in the javaScript file to lay out in a logical order how to complete the tasks. I have been working on trying to do a better job planning my coding instead of jumping right in with no direction. So I created a logical order to proceed with. I first needed to provide instructions and decided that instructions printed inside the textbox were the simpliest solution and the user has clear instructions on how to proceed. Then I needed a way to collect user preferences for password length and characters to include and decided that window prompts would be the most efficient way to collect the data. The user is presented with a series of prompts to collect the information and it is validated as they proceed. For example, when they choose a password length I used the else if statement to validate the selection to include only numbers between 8-128. The user will recieve an alert if they enter a number outside of the range or if they attempt to enter anything other than a number.

#### User preferences are collected using window prompts
![project screenshot](/assets/img/screenshot2.jpg)

Since the confirmation boxes return a value of either true or false, I created a variable for each confirmation box and used an if statement to determine if the user clicked OK or Cancel. I assigned 2 conditions to the initial if statements:

```// Choose Numbers
    var numberPrompt = confirm('Do you want to include numbers? Click OK to include numbers or cancel to get more options.');
    if (numberPrompt !=null) {
      document.getElementById('numbers').innerHTML = 'Include Numbers: ' + numberPrompt;
```
The reason for this is because I want to return this information to the web page with a value of either true or false. This returns to the page - `Include Numbers: true` or `Include Numbers: false` depending upon the input. If I were to leave out the !=null condition, the text would only be written to the page if the user chose OK, but I wanted the text written to the page even if they clicked Cancel.

Next I created if else statements to determine what characters would be added to the string of characters to choose from. for example: 

   ```// Add uppercase to password
      if(upperPrompt === true){
        var newUpperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      } else {
        var newUpperString = '';
      }
  ```
If the user selects OK it returns a value of true and a new variable is created that holds the string containing all uppercase letters; if they choose cancel the statement is not true and a new variable is created with and empty string. I then repeated this process for each of the options: lowercase letters, numbers and special characters. This allowed me to concatenate a string at the end which held all of the values that I wanted to include. `var newPasswordString = newUpperString + newLowerString + newNumberString + newSpecialsString;` By using this method the `newPasswordString` only contains the options selected. If the user doesn't select any of the options, the string will be empty.

---

## What I learned

This project was very challenging and very rewarding. The main javaScript concept used throughout this project is the if else statement. I feel that I have gained a great deal of confidence using these statements. W3School.com was an invaluable resource for this project. The clear and consise explanations are easy to implement and follow. Here is the link for the if else page on W3: https://www.w3schools.com/js/js_if_else.asp.

Thanks for taking the time to read this!

Jay

Check out the deployed project here: https://jaychapman.github.io/passwordGenerator/

      
 
      
