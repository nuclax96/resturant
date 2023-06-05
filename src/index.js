import loadInitialHtml from "./modules/initial-page-load";
import showMenu from "./modules/showTabs/showMenu";
import "./css/style.css";

loadInitialHtml();

const addEventListeners = () => {
  const homeLinkEl = document.querySelector("#link-home");
  const menuLinkEl = document.querySelector("#link-menu");
  const contactLinkEl = document.querySelector("#link-contact");
  const aboutLinkEl = document.querySelector("#link-about");
  homeLinkEl.addEventListener("click", () => {});
  menuLinkEl.addEventListener("click", showMenu);
  contactLinkEl.addEventListener("click", () => {});
  aboutLinkEl.addEventListener("click", () => {});
};

addEventListeners();
