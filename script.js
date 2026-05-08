let form = document.getElementById("donationForm");

let progressBar = document.getElementById("progressBar");

let raisedText = document.querySelector(".mt-2");

let totalRaised = 65000;
let goalAmount = 100000;

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let amount = document.getElementById("amount").value;

    if(name === "" || email === "" || amount === "") {

        alert("Please fill all fields.");

    }

    else {

        amount = parseInt(amount);

        totalRaised += amount;

        if(totalRaised > goalAmount) {
            totalRaised = goalAmount;
        }

        let percentage = (totalRaised / goalAmount) * 100;

        progressBar.style.width = percentage + "%";

        progressBar.innerHTML = Math.floor(percentage) + "%";

        raisedText.innerHTML =
            "₹" + totalRaised +
            " raised out of ₹" +
            goalAmount;

        alert(
            "Thank you " + name +
            " for donating ₹" + amount + "!"
        );

        form.reset();
    }

});
