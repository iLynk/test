document.addEventListener("DOMContentLoaded", function () {
    let submitButton = document.querySelector("#submitBtn");

    submitButton.addEventListener("click", checkPassword);
    async function checkPassword() {
        let userInput = document.querySelector("#password").value;
        let res = await fetch("/api/check-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ password: userInput })
        });

        if (res.ok) {
            document.querySelector("#content").style.display = "block";
        } else {
            alert("C'est râté !");
        }
    }
});