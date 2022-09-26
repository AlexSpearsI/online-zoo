let input = document.querySelector(".input-footer")
let submit = document.querySelector(".submit-footer")

submit.addEventListener('click', function() {
    let text = input.value;
    if (!text.includes('@')) {
        submit.style.border = "1px solid #D31414";
        submit.style.color = "#D31414";
        input.style.border = "0.7px solid #920000";
    } else {
        submit.style.border = "1px solid #4B9200";
        submit.style.color = "#4B9200";
        input.style.border = "0.7px solid #4B9200";
    }
})
