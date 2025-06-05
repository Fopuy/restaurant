console.log("hello");

import { home } from "./home.js";
import { about } from "./about.js";
import { menu } from "./menu.js";

const homebtn = document.querySelector("#homebtn");
homebtn.addEventListener("click", home);

const aboutbtn = document.querySelector("#aboutbtn");
aboutbtn.addEventListener("click", about);

const menubtn = document.querySelector("#menubtn");
menubtn.addEventListener("click", menu);

home();