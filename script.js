window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const board = document.querySelectorAll(".board button");

    board.forEach((box, index) => {
        box.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            sounds[index].currentTime = 0;
        });
    });
});

window.onerror = (e) => alert(e);

const searchbar = document.getElementById("searchbar");

searchbar.addEventListener("change", (e) => {
    const str = searchbar.value.toLowerCase();
    const items = document.querySelectorAll(".box");
    
    let itemNames = new Array();
    let i = 0;
    items.forEach(item => {
        itemNames[i] = item.innerText.toLowerCase();
        ++i;
    });

    i = 0;
    items.forEach(item => {
        if (!itemNames[i].includes(str)) {
            item.style = "display:none;";
        }
        ++i;
    });
});

function clear() {
    const items = document.querySelectorAll(".box");
    items.forEach(item => {
        item.style = "display:inline-block";
    });
}

document.getElementById("clear").addEventListener("click", (e) => {
    clear();
});