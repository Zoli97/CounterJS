//initial count
let count = 0;

//select value and buttons

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

//functia ii apelata la fiecare item(buton) in parte( callback function);
//parcurg fiecare buton in parte;

buttons.forEach((item) => {
    item.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        console.log(styles);

        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        }

        if (count < 0) {
            value.style.color = "red";
        }

        if (count == 0) {
            value.style.color = "black";
        }

        if (count == 24) {
            value.style.color = "blue";
        }
        value.textContent = count;
    });
});