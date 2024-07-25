// Create a "close" button and append it to each list item
const myNodelist = document.querySelectorAll("li");
myNodelist.forEach((item) => {
    appendCloseButton(item);
});

// Function to create and append a close button to a list item
function appendCloseButton(item) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    item.appendChild(span);
}

// Click on a close button to hide the current list item
document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('close')) {
        const li = e.target.parentElement;
        li.style.display = "none";
    }
});

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    const inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("You must write something!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = inputValue;
    appendCloseButton(li);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
}
