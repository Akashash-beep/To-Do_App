const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("List-container");
function addTask() {
    if (inputbox.value === "") {
        alert("you must type something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    save_data();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        save_data();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save_data()
    }

}, false);

function save_data() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showlist() {
    listContainer.innerHTML = localStorage.getItem("data");

}
showlist();