$(document).ready(() => {

    $(document).on("submit", "#check", checkWithRegex);
    $(document).on("click", "#retry", retrypasschecker);

    function checkWithRegex(event) {

        event.preventDefault();

        const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.{8,})/;

        const password = $("#password").val().trim();

        const criteria = [$("#lower"), $("#upper"), $("#special"), $("#number"), $("#min")];

        const regexPortions = [/(?=.*[a-z])/, /(?=.*[A-Z])/, /(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])/, /(?=.*\d)/, /(?=.{8,})/];

        const checked = ` <img src="./pics/check.png">`;
        const failed = ` <img src="./pics/fail.png">`;

        for (let i = 0; i < regexPortions.length; i++) {
            if (password.match(regexPortions[i])) {
                criteria[i].append(checked);
            } else {
                criteria[i].append(failed)
            }
        }

        if (password.match(regex)) {
            $("#passcheck").append(`<h1 class="subtitle">Your password <span>'${password}'</span> is legendary!</h1>`);
        } else if (password != "") {
            $("#passcheck").append(`<h1 class="subtitle">Your password <span>'${password}'</span> is too weak :(</h1>`);
        }

        $("#passcheck").append(`<button id="retry" class="button is-medium">Check Again</button>`);

        $("#password").attr("disabled", true);
        $("#checkbtn").attr("disabled", true);

        clearInput();
    }

    function clearInput() {
        $("#password").val("");
    }

    function retrypasschecker() {
        window.location.reload();
    }

});