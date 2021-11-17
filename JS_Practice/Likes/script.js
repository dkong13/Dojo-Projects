var likes = [0,0,0];
var likesBowie = document.querySelector("#like-number-Bowie");
var likesBilly = document.querySelector("#like-number-Billy");
var likesWeezer = document.querySelector("#like-number-Weezer");

function addLikeBowie() {
    likes[0]++;
    likesBowie.innerText = likes[0];
}

function addLikeBilly() {
    likes[1]++;
    likesBilly.innerText = likes[1];
}

function addLikeWeezer() {
    likes[2]++;
    likesWeezer.innerText = likes[2];
}

