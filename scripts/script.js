// JavaScript Document

var buttonOpen = document.querySelector('#hamburger-knop');
var buttonSluit = document.querySelector('#hamburger-knop');
var lijst = document.querySelector('.hamburger-menu');

function openen() {
    lijst.classList.toggle('open');
}

buttonOpen.addEventListener('click', openen);

