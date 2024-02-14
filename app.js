// JavaScript

// set initail count
let count = 0;

// select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function (event) {
        const styles = event.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        } else if(styles.contains("increase")){
            count ++;
        } else{
            count = 0;
        }
        value.textContent = count;
    });
});
