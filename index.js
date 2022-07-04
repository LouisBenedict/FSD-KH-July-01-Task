// Knowledgehut Task 1 - 4 (01 July 2022)

// Task 1 -> Alert if the String is palindrome or not. 

function palindrome_or_not() {
    let user_input = prompt();

    for(let i = 0; i < user_input.length; i + i - 1) {
        if(user_input[i] !== user_input[user_input.length - 1]) {
            alert("False");
        } else {
            alert("True");
        }
    }
}

// Task 2 -> Alert most occurred character in String. 

function most_occurred_char() {
    let user_input2 = prompt("Check most occurred character.");

    const str_arr = {};
    let count = 0;
    let max_char = ""; 

    for(let char of user_input2) {
        str_arr[char] = str_arr[char] + 1 || 1;
    }

    for(let key in str_arr) {
        if(str_arr[key] > count) {
            count = str_arr[key];
            max_char = key;
        }
    }
    alert(max_char);
}


// Task 3 -> Alert Factorial Number.

function factorial() {
    let user_input3 = prompt();
    user_input3 = parseInt(user_input3);

    let answer = 1;

    if(user_input3 == 0 || user_input3 == 1) {
         alert(answer);
    } else {
        for(let i = user_input3; i >= 1; i = i - 1) {
            answer = answer * i;
        }
        alert(answer);
    }
}

// Task 4 -> Alert Vowel Count.

function exclude_vowels() {
    let user_input4 = prompt();
    
    let count = 0;
    
    for(let i = 0; i < user_input4.length; i = i + 1) {
        switch(user_input4[i]) {
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                break;
            default:
                count = count + 1;
        }
    }
    alert(count);
}
