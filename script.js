let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach(() => {
    button.addEventListener('click', (e) => {
        // in this statment e is represent event function
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})
// function getTheData(val) {
//     let formData = document.getElementById("display");
//     if (val === "=") {
//         let result = eval(formData.value);
//         formData.value = result;
//         return
//     }
//     formData.value += val;
// }