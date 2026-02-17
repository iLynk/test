document.addEventListener("DOMContentLoaded", function () {

    let correctPassword = "vivitropcool";
    let passInput = document.querySelector("#password");
    let submitButton = document.querySelector("#submitBtn");

    submitButton.addEventListener("click", checkPassword);
    function checkPassword() {
        let userInput = passInput.value;
        if (userInput === correctPassword) {
            document.getElementById("content").style.display = "block";
            document.querySelector("video").play();
        } else {
            alert("Mot de passe incorrect. Essayez encore.");
        }
    }
});