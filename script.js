let menuBtn = document.getElementById("ham__btn");
let exMenu = document.getElementById("nav__menu");
let closeMenu = document.getElementById("head");

let hamShow = () => {
	if (exMenu.style.display === "none") {
		exMenu.style.display = "block";
		menuBtn.style.transform = `rotate(-90deg)`;
	} else if (exMenu.style.display === "block") {
		exMenu.style.display = "none";
		menuBtn.style.transform = `rotate(0deg)`;
	}
};

menuBtn.addEventListener("click", hamShow);

function extraClose() {
	if (menuBtn.style.transform === `rotate(-90deg)`) {
		menuBtn.style.transform = `rotate(0deg)`;
	}
	exMenu.style.display = "none";
}

closeMenu.addEventListener("click", extraClose);
