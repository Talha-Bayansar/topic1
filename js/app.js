let swRegistration = null;

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((res) => {
                console.log("service worker registered");
                swRegistration = res;
            })
            .catch((err) => console.log("service worker not registered", err));
    });
}

const container = document.querySelector(".container");
const coffees = [
    {
        name: "Perspiciatis",
        image: "images/coffee.jpg",
    },
    {
        name: "Voluptatem",
        image: "images/coffee.jpg",
    },
    {
        name: "Explicabo",
        image: "images/coffee.jpg",
    },
    {
        name: "Rchitecto",
        image: "images/coffee.jpg",
    },
    {
        name: " Beatae",
        image: "images/coffee.jpg",
    },
    {
        name: " Vitae",
        image: "images/coffee.jpg",
    },
    {
        name: "Inventore",
        image: "images/coffee.jpg",
    },
    {
        name: "Veritatis",
        image: "images/coffee.jpg",
    },
    {
        name: "Accusantium",
        image: "images/coffee.jpg",
    },
];

const showCoffees = () => {
    let output = "";
    coffees.forEach(
        ({ name, image }) =>
            (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <button class="card--link">Taste</button>
                </div>
                `)
    );
    container.innerHTML = output;
    document
        .querySelectorAll(".card--link")
        .forEach((b) => b.addEventListener("click", displayNotification));
};

document.addEventListener("DOMContentLoaded", showCoffees);

function displayNotification() {
    if (window.Notification && Notification.permission === "granted") {
        notification();
    }
    // If the user hasn't told if he wants to be notified or not
    // Note: because of Chrome, we are not sure the permission property
    // is set, therefore it's unsafe to check for the "default" value.
    else if (window.Notification && Notification.permission !== "denied") {
        Notification.requestPermission((status) => {
            if (status === "granted") {
                notification();
            } else {
                alert("You denied or dismissed permissions to notifications.");
            }
        });
    } else {
        // If the user refuses to get notified
        alert(
            "You denied permissions to notifications. Please go to your browser or phone setting to allow notifications."
        );
    }
}

function notification() {
    console.log("clicked");
    const options = {
        body: "Testing Our Notification",
    };
    swRegistration.showNotification("PWA Notification!", options);
}
