import clearContainer from "../clearMainContent";
import cappuccino from "../../assets/img/cappuccino.jpg";
import mocha from "../../assets/img/mocha.jpg";
import latte from "../../assets/img/latte.jpg";
import {
  createDiv,
  insertIntoContainer,
  createHeading,
  createImage,
  createParagraph,
} from "../helperFunctions/createHtmlEl";
// const menuCount = 1;
const addContentToMenu = (heading, src) => {
  const mainContentContainer = document.querySelector("#main-div-content");
  const divCard = createDiv(`card-menu`);
  const headingCard = createHeading("h3", heading, "heading-menu-card");
  const imgMenuCard = createImage(src, "img-menu");
  insertIntoContainer(mainContentContainer, divCard);
  insertIntoContainer(divCard, imgMenuCard);
  insertIntoContainer(divCard, headingCard);
};

const showMenu = () => {
  clearContainer();
  // Create Menu Cards
  const mainContentContainer = document.querySelector("#main-div-content");

  const headingMain = createParagraph("Menu");
  headingMain.id = "heading-main-content";

  insertIntoContainer(mainContentContainer, headingMain);

  addContentToMenu("Cappucino", cappuccino);
  addContentToMenu("Mocha", mocha);
  addContentToMenu("Latte", latte);
};

export default showMenu;
