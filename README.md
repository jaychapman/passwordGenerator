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

I used if statements to determine which characters to include in the user's password. Since the confirmation boxes return a value of either true or false, I created a variable to hold the user's 
