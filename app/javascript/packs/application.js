// app/javascript/packs/application.js

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../stylesheets/application";

Rails.start();
Turbolinks.start();
ActiveStorage.start();

console.log('Hello from Webpacker');

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler) {
      navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');
      });
    }

    const dropdownToggle = document.querySelector('.nav-item.dropdown .dropdown-toggle');
    const dropdownMenu = document.querySelector('.nav-item.dropdown .dropdown-menu');

    if (dropdownToggle) {
      dropdownToggle.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownToggle.parentElement.classList.toggle('show');
        dropdownMenu.classList.toggle('show');
      });

      document.addEventListener('click', (event) => {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownToggle.parentElement.classList.remove('show');
          dropdownMenu.classList.remove('show');
        }
      });
    }
});
