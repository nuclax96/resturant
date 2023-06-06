import clearContainer from "../helperFunctions/clearMainContent";
import shopAboutImgSrc from "../../assets/img/aboutShop.jpg";
import {
  createDiv,
  insertIntoContainer,
  createHeading,
  createImage,
  createParagraph,
} from "../helperFunctions/createHtmlEl";

const addAboutTabContent = (text, src) => {
  const mainContentContainer = document.querySelector("#main-div-content");
  const divCard = createDiv(`card-menu`);
  const imgMenuCard = createImage(src, "img-menu");
  const textAbout = createParagraph(text, "aboutText");
  insertIntoContainer(mainContentContainer, divCard);
  insertIntoContainer(divCard, imgMenuCard);
  insertIntoContainer(divCard, textAbout);
};

const showMenu = () => {
  const aboutText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto ad deserunt id, nisi possimus animi impedit perferendis";
  clearContainer();
  // Create Menu Cards
  const mainContentContainer = document.querySelector("#main-div-content");

  const headingMain = createParagraph("About Us");
  headingMain.id = "heading-main-content";

  insertIntoContainer(mainContentContainer, headingMain);

  addAboutTabContent(aboutText, shopAboutImgSrc);
};

export default showMenu;
