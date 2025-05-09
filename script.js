window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.querySelector(".loader-cat");
        if (loader) {
            console.log("here");
            loader.classList.add("loader-hidden");
        }
    }, 2000);
});