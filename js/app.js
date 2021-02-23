if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((res) => console.log("service worker registered"))
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
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    );
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);
