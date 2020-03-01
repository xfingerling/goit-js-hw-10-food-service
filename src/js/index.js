import menuItems from "../menu.json";
import menuItemTemplate from "../templates/menu-item.hbs";

import "../css/styles.css";

import theme from "./theme";

const switchInput = document.querySelector("input.js-switch-input");

if (!localStorage.theme) {
  localStorage.setItem("theme", theme.LIGHT);
}

if (localStorage.theme === theme.DARK) {
  switchInput.checked = true;
}

document.body.classList.add(localStorage.theme);

const changeTheme = function() {
  const { theme: currentTheme } = localStorage;

  if (currentTheme !== theme.DARK) {
    localStorage.setItem("theme", theme.DARK);

    document.body.classList.remove(theme.LIGHT);
    document.body.classList.add(theme.DARK);
  }

  if (currentTheme !== theme.LIGHT) {
    localStorage.setItem("theme", theme.LIGHT);

    document.body.classList.remove(theme.DARK);
    document.body.classList.add(theme.LIGHT);
  }
};

switchInput.addEventListener("change", changeTheme);

const createMenuList = function() {
  const menuList = document.querySelector("ul.js-menu");
  const items = menuItems.map((el) => menuItemTemplate(el)).join("");

  menuList.insertAdjacentHTML("beforeend", items);
};
createMenuList();
