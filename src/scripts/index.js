import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/style.css"
import "../styles/responsive.css"
import * as bootstrap from 'bootstrap';

const toggleNav = () => {
    const navList = document.querySelector('.navbar');
    navList.classList.toggle('open');
};

window.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('.hamburger');
    button.addEventListener('click', toggleNav);
});