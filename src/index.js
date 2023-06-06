import loadInitialHtml from "./modules/initial-page-load";
import showMenu from "./modules/showTabs/showMenu";
import showHome from "./modules/showTabs/showHome";
import showAbout from "./modules/showTabs/showAbout";
import showContact from "./modules/showTabs/showContact";
import "./css/style.css";

loadInitialHtml();

const addEventListeners = () => {
  const homeLinkEl = document.querySelector("#link-home");
  const menuLinkEl = document.querySelector("#link-menu");
  const contactLinkEl = document.querySelector("#link-contact");
  const aboutLinkEl = document.querySelector("#link-about");
  homeLinkEl.addEventListener("click", showHome);
  menuLinkEl.addEventListener("click", showMenu);
  contactLinkEl.addEventListener("click", showContact);
  aboutLinkEl.addEventListener("click", showAbout);
};

addEventListeners();
