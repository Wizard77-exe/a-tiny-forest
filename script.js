// ============================================================
// ELEMENTS
// ============================================================

const intro =
    document.querySelector("#intro");

const world =
    document.querySelector("#world");

const introText =
    document.querySelector("#intro-text");

const subText =
    document.querySelector("#sub-text");

const openButton =
    document.querySelector("#open-button");

const forestMessage =
    document.querySelector("#forest-message");

const stayButton =
    document.querySelector("#stay-button");

const introStars =
    document.querySelector("#intro-stars");

const worldStars =
    document.querySelector("#world-stars");

const firefliesContainer =
    document.querySelector("#fireflies");


// ============================================================
// STAR GENERATOR
// ============================================================

function createStars(container, count) {

    for (let i = 0; i < count; i++) {

        const star =
            document.createElement("div");

        star.className = "star";

        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;

        star.style.setProperty(
            "--duration",
            `${2 + Math.random() * 4}s`
        );

        star.style.setProperty(
            "--delay",
            `${Math.random() * 4}s`
        );

        container.appendChild(star);
    }
}


// ============================================================
// FIREFLY GENERATOR
// ============================================================

function createFireflies(count) {

    for (let i = 0; i < count; i++) {

        const firefly =
            document.createElement("div");

        firefly.className =
            "firefly";

        firefly.style.left =
            `${10 + Math.random() * 80}%`;

        firefly.style.top =
            `${30 + Math.random() * 45}%`;

        firefly.style.setProperty(
            "--x",
            `${-50 + Math.random() * 100}px`
        );

        firefly.style.setProperty(
            "--y",
            `${-50 + Math.random() * 100}px`
        );

        firefly.style.setProperty(
            "--fly-time",
            `${3 + Math.random() * 5}s`
        );

        firefly.style.setProperty(
            "--fly-delay",
            `${Math.random() * 5}s`
        );

        firefliesContainer.appendChild(
            firefly
        );
    }
}


// ============================================================
// INTRO
// ============================================================

function startIntro() {

    setTimeout(() => {

        introText.classList.remove(
            "hidden"
        );

    }, 1200);


    setTimeout(() => {

        subText.classList.remove(
            "hidden"
        );

    }, 3000);


    setTimeout(() => {

        openButton.classList.remove(
            "hidden"
        );

    }, 5000);
}


// ============================================================
// OPEN FOREST
// ============================================================

function openForest() {

    intro.style.transition =
        "opacity 2.5s ease";

    intro.style.opacity = "0";


    setTimeout(() => {

        intro.classList.add(
            "hidden"
        );

        world.classList.remove(
            "hidden"
        );

        world.style.opacity = "0";


        requestAnimationFrame(() => {

            world.style.transition =
                "opacity 3s ease";

            world.style.opacity = "1";

        });


        createFireflies(20);

    }, 2500);
}


// ============================================================
// STAY A LITTLE LONGER
// ============================================================

function stayLonger() {

    forestMessage.classList.add(
        "fade-away"
    );

}


// ============================================================
// EVENTS
// ============================================================

openButton.addEventListener(
    "click",
    openForest
);

stayButton.addEventListener(
    "click",
    stayLonger
);


// ============================================================
// INITIALIZE
// ============================================================

createStars(
    introStars,
    100
);

createStars(
    worldStars,
    100
);

startIntro();
