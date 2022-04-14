// Navbar section
const icon = document.querySelector("#icon");
const ul = document.querySelector("#ul");
const iconContainer = document.querySelector("#icon-container");

function show(){
    ul.classList.toggle("active");
    icon.style.display = "none";
    iconContainer.innerHTML = `<i class="fa-solid cursor-pointer text-2xl fa-xmark" id="icon" onclick="hide()"></i>`;
}

function hide() {
    ul.classList.toggle("active");
    iconContainer.innerHTML = `<i class="fas fa-bars cursor-pointer text-2xl" id="icon" onclick="show()"></i>`;
}


function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})