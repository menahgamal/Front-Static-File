document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("changeColorBtn");

    if (button) {
        button.addEventListener("click", function() {
            changeTheme();
        });
    } else {
        console.error("Button not found! Make sure the ID is correct.");
    }
});

function changeTheme() {
    let colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffb6c1", "#d8bfd8"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}