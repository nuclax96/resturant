import clearContainer from "../helperFunctions/clearMainContent";
import shopAboutImgSrc from "../../assets/img/aboutShop.jpg";
import {
  createDiv,
  insertIntoContainer,
  createHeading,
  createImage,
  createParagraph,
} from "../helperFunctions/createHtmlEl";

const addAboutTabContent = (shopName, emailAddress, address) => {
  const mainContentContainer = document.querySelector("#main-div-content");
  const divCard = createDiv(`card-menu`);
  //   const imgMenuCard = createImage(src, "img-menu");
  const shopNameEl = createParagraph(shopName, "shopNameContact");
  const shopEmailEl = createParagraph(emailAddress, "shopNameContact");
  const shopAddressEL = createParagraph(address, "shopNameContact");
  insertIntoContainer(mainContentContainer, divCard);
  insertIntoContainer(divCard, shopNameEl);
  insertIntoContainer(divCard, shopEmailEl);
  insertIntoContainer(divCard, shopAddressEL);
};

const showContact = () => {
  const shopName = "Coffee with friends";
  const emailAddress = "cfw@gmail.com";
  const address = "Lorem ipsum dolor sit amet consectetur adipisicing elit. ";

  clearContainer();
  // Create Menu Cards
  const mainContentContainer = document.querySelector("#main-div-content");

  const headingMain = createParagraph("Contact Us");
  headingMain.id = "heading-main-content";

  insertIntoContainer(mainContentContainer, headingMain);

  addAboutTabContent(shopName, emailAddress, address);
};

export default showContact;
