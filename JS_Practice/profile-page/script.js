console.log("page loaded...");

var profileName = document.querySelector("#profile-name");

function changeName() {
    profileName.innerHTML = "Sorceress Supreme";
}

var request = [
    document.querySelector("#toddReq"),
    document.querySelector("#philReq")
]

var connectReq = document.querySelector("#connectReq")

function removeReq(id) {
    request[id].remove();
    connectReq.innerHTML --;
}

var connections = document.querySelector("#yourConnections")

function makeConnection() {
    connections.innerHTML ++;
}

