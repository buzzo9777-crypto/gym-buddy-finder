const button = document.querySelector("button");

button.addEventListener("click", function () {
    const name = document.querySelectorAll("input")[0].value;
    const city = document.querySelectorAll("input")[1].value;
    const workout = document.querySelector("select").value;

    if (name === "" || city === "" || workout === "Select your workout") {
        alert("Please fill all the details.");
        return;
    }

    alert(
        "Buddy search started!\n\n" +
        "Name: " + name +
        "\nCity: " + city +
        "\nWorkout: " + workout
    );
});


function findBuddy() {
    const name = document.querySelector('input[placeholder="Enter your name"]').value;
    const city = document.querySelector('input[placeholder="Enter your city"]').value;

    if (name === "" || city === "") {
        alert("Please enter your name and city.");
        return;
    }

    document.getElementById("buddyResult").innerHTML = `
        <div class="buddy-card">
            <h3> Gym Buddy Found!</h3>
            <p><strong>Name:</strong> Shivendra</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Workout:</strong> Strength Training</p>
            <p><strong>Fitness Goal:</strong> Build Strength</p>
            <p><strong>Gym Price:</strong> ₹2,500/month</p>
            <button
            onclick="connectBuddy('Shivendra')">
            connect with Shivendra</button> 
        
        </div>
        div class="buddy-card">
    <h3>Gym Buddy Found!</h3>
    <p><strong>Name:</strong> Ananya</p>
    <p><strong>City:</strong> ${city}</p>
    <p><strong>Workout:</strong> Yoga & Fitness</p>
    <p><strong>Fitness Goal:</strong> Flexibility & Fitness</p>
    <p><strong>Gym Price:</strong> ₹1,500/month</p>
    <p><strong>Payment:</strong> UPI / Cash</p>
    <button onclick="connectBuddy('Ananya')">Connect</button>
</div>

<div class="buddy-card">
    <h3> Gym Buddy Found!</h3>
    <p><strong>Name:</strong> Ayush</p>
    <p><strong>City:</strong> ${city}</p>
    <p><strong>Workout:</strong> Strength Training</p>
    <p><strong>Fitness Goal:</strong> Build Strength</p>
    <p><strong>Gym Price:</s…</strong> ₹1000/month</p>
    <p><strong>Payment:</strong> UPI / Cash</p>
    <button onclick="connectBuddy('Ayush')">Connect</button>
    
</div>
    `;
}
function connectBuddy(){
    alert("Buddy request sent to successfully!");
}



const searchBuddy = document.getElementById("searchBuddy");

searchBuddy.addEventListener("input", function () {
    const searchText = searchBuddy.value.toLowerCase();
    const buddies = document.querySelectorAll(".buddy-card");

    buddies.forEach(function (buddy) {
        const text = buddy.innerText.toLowerCase();

        if (text.includes(searchText)) {
            buddy.style.display = "block";
        } else {
            buddy.style.display = "none";
        }
    });
});
function connectBuddy(name){
    alert("Connection request sent to"+name+"!");
}
const searchBuddy = document.getElementById("searchBuddy");
const buddyCards = document.querySelectorAll(".buddy-card");
if (searchBuddy) {
    searchBuddy.addEventListener("input", function () {
        const searchText = this.value.toLowerCase();

        buddyCards.forEach(card => {
            const text = card.innerText.toLowerCase();

            if (text.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}

const workoutFilter = document.getElementById("workoutFilter");

if (workoutFilter) {
    workoutFilter.addEventListener("change", function () {
        const selectedWorkout = this.value.toLowerCase();

        buddyCards.forEach(card => {
            const cardText = card.innerText.toLowerCase();

            if (
                selectedWorkout === "all" ||
                cardText.includes(selectedWorkout)
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}
// Connect button
const connectButtons = document.querySelectorAll("button");

connectButtons.forEach(button => {
    if (button.innerText.trim().toLowerCase() === "connect") {
        button.addEventListener("click", function () {
            alert("Connection request sent!");
        });
    }
});
// Profile button
const profileButtons = document.querySelectorAll("button");

profileButtons.forEach(button => {
    if (button.innerText.trim().toLowerCase() === "profile") {
        button.addEventListener("click", function () {
            const card = this.closest(".buddy-card");

            if (card) {
                const name = card.querySelector("h3")?.innerText || "Buddy";

                alert(
                    "Profile\n\n" +
                    "Name: " + name + "\n" +
                    "Click OK to continue."
                );
            }
        });
    }
});