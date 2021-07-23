'use strict'

window.addEventListener("load", function(){

    // Variables

    var input_password = document.getElementById("input_password");
    var range_selector = document.getElementById("range-selector");
    var number_selector = document.getElementById("number-selector");
    var button_generate = document.getElementById("button_generate");
    var uppercase_cb = document.getElementById("uppercase");
    var lowercase_cb = document.getElementById("lowercase");
    var numbers_cb = document.getElementById("numbers");
    var symbols_cb = document.getElementById("symbols");
    var copy_password = document.getElementById("copy-password");
    var img_copy_button = document.querySelector(".copy-img");

    const uppercase_letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lowercase_letters = "qwertyuiopasdfghjklzxcvbnm";
    const numbers = "1234567890";
    const symbols = "`!@#$%^&*()_+=-";


    function GeneratePassword(){

        var length = number_selector.value;

        var password = ""

        if(!uppercase_cb.checked && !lowercase_cb.checked && !numbers_cb.checked && !symbols_cb.checked){
            input_password.classList.add("shake");
            input_password.value = "You have to select at least one setting"
            copy_password.style.display = "none";
        } else {
            copy_password.style.display = "inline-block";
            img_copy_button.src = "css/copy.svg";
            input_password.classList.remove("shake");
            for (let i = 0; i < length; i++) {
                var result_function = SelectItem();
                password = password + result_function;
            }
            input_password.value = password;
        }


    }

    function SelectItem(){

        var random_item = [];

        if(uppercase_cb.checked){
            random_item.push(GetUppercase());
        }

        if(lowercase_cb.checked){
            random_item.push(GetLowecase());
        }

        if(numbers_cb.checked){
            random_item.push(GetNumber());
        }

        if(symbols_cb.checked){
            random_item.push(GetSymbol());
        }

        var value_to_return = random_item[Math.floor(Math.random() * random_item.length)];
        return value_to_return;

    }


    // Funciones para cada tipo de seleccion

    function GetUppercase(){
        var uppercase_array = uppercase_letters.split("");
        return uppercase_array[Math.floor(Math.random() * uppercase_array.length)];
    }
    function GetLowecase(){
        var lowercase_array = lowercase_letters.split("");
        return lowercase_array[Math.floor(Math.random() * lowercase_array.length)];
    }
    function GetNumber(){
        var numbers_array = numbers.split("");
        return numbers_array[Math.floor(Math.random() * numbers_array.length)];
    }
    function GetSymbol(){
        var symbols_array = symbols.split("");
        return symbols_array[Math.floor(Math.random() * symbols_array.length)];
    }


    button_generate.addEventListener("click",GeneratePassword);


    range_selector.addEventListener("mousemove", function(){
        number_selector.value = range_selector.value;
    });

    number_selector.addEventListener("blur", function(){
        range_selector.value = number_selector.value;
    });


    copy_password.addEventListener("click", function(){

        input_password.select();
        document.execCommand("copy");
        window.getSelection().removeAllRanges();

        var img_copy_button = document.querySelector(".copy-img");

        img_copy_button.src = "css/check.svg";

    })










});