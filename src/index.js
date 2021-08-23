let toggle = null;

const button = document.getElementById("share-btn");

const showShare = document.getElementById("hidden-share");

button.addEventListener("click", (e) => {
	if (toggle === null) {
		toggle = true;
		showShare.classList.add("in");
        button.classList.add("in-btn");
	} else {
		if (toggle === true) {
			showShare.classList.remove("in");
            button.classList.remove("in-btn");
		} else {
			showShare.classList.add("in");
            button.classList.add("in-btn");
		}
		toggle = !toggle;
	}
});

console.log("comprehendos?");
