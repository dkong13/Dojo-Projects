var pets = [3, 5, 8];
var animalPets = [
    document.querySelector("#pepper-pets"),
    document.querySelector("#bruce-pets"),
    document.querySelector("#oscar-pets")
];

function pet(id) {
    pets[id]++;
    animalPets[id].innerHTML = pets[id]
}

function hide(element) {
    element.remove()
}

function choice(select) {
    alert("You are looking for a: "+select.options[select.selectedIndex].text);
}

