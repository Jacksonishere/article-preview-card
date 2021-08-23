let toggle = null;

const button = document.getElementById("share-btn");
const showShare = document.getElementById("hidden-share");

button.addEventListener("click", (e) =>{
    if(toggle === null){
        toggle = true;
        showShare.classList.add("in");
    }
    else{
        if(toggle === true){
            showShare.classList.remove("in");
        }
        else{
            showShare.classList.add("in");
        }
        toggle = !toggle;
    }
})

console.log("comprehendos?");


