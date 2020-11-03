// JavaScript Document

var hamburgermenu = document.querySelector(".hamburger-menu");
var button = document.querySelector("#hamburger-knop");

button.addEventListener("click", openen);


function openen() {
    
	if (hamburgermenu.style.display === "block") {
        
		hamburgermenu.style.display = "none"

	} else {

        hamburgermenu.style.display = "block";

	};

};






