document.addEventListener('DOMContentLoaded', function() {

let content = document.getElementById("circle");
let button = document.getElementById("button");

button.onclick = function() {

    if (content.className == "circle") {
        content.className = "circle active";
    } else {
        content.className = "circle";
    }

};

})
