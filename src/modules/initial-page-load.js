const divContainer = document.querySelector("#content");

const createHeader = () => {
  const headerEl = document.createElement("header");
  divContainer.appendChild(headerEl);
  const divEl = document.createElement("div");
  divEl.id = "nav-tabs";
  const linkHome = document.createElement("a");
  const linkMenu = document.createElement("a");
  const linkAbout = document.createElement("a");
  const linkContacts = document.createElement("a");
  linkHome.textContent = "Home";
  linkMenu.textContent = "Menu";
  linkContacts.textContent = "Contact";
  linkAbout.textContent = "About";
  linkHome.setAttribute("href", "#");
  linkMenu.setAttribute("href", "#");
  linkAbout.setAttribute("href", "#");
  linkContacts.setAttribute("href", "#");

  linkHome.id = "link-home";
  linkMenu.id = "link-menu";
  linkContacts.id = "link-contact";
  linkAbout.id = "link-about";

  divEl.appendChild(linkHome);
  divEl.appendChild(linkMenu);
  divEl.appendChild(linkContacts);
  divEl.appendChild(linkAbout);
  headerEl.appendChild(divEl);

  const shopNameEl = document.createElement("p");
  shopNameEl.textContent = "Coffee with Friends";
  shopNameEl.id = "nav-shopName";

  headerEl.appendChild(shopNameEl);
};
const createMainContainer = () => {
  const mainContainerEl = document.createElement("main");
  const divMainEl = document.createElement("div");
  const headingMainEl = document.createElement("p");
  const tagLineEl = document.createElement("p");
  tagLineEl.id = "tagLine-text";
  headingMainEl.textContent = "Coffee with Friends:";
  headingMainEl.id = "heading-main-content";
  tagLineEl.textContent =
    "Where every cup is a conversation. ☕  Whether you want to catch up with an old friend, have a meeting with a colleague, or just relax with a good book, Coffee with Friends has something for everyone. From espresso to cappuccino, from muffins to sandwiches, we have it all. Come and experience the warm and friendly atmosphere of Coffee with Friends today. You’ll be glad you did.";
  divMainEl.id = "main-div-content";
  divContainer.appendChild(mainContainerEl);
  mainContainerEl.appendChild(divMainEl);
  divMainEl.appendChild(headingMainEl);
  divMainEl.appendChild(tagLineEl);
};
const createFooter = () => {
  const footerEl = document.createElement("footer");
  const paraFooter = document.createElement("p");
  const paraImageCreditsEl = document.createElement("p");
  const imageCreditLinkEl = document.createElement("a");
  imageCreditLinkEl.setAttribute(
    "href",
    "https://www.freepik.com/free-photo/top-view-cup-coffee-with-copy-space_5180344.htm#query=coffee%20beans%20cup%20png&position=45&from_view=search&track=robertav1_2_sidr"
  );
  paraFooter.textContent = `Copyright Aditya \u00A9 2023`;
  imageCreditLinkEl.textContent = "Image Credits :Freepik";
  imageCreditLinkEl.id = "link-imageOwner";
  paraImageCreditsEl.appendChild(imageCreditLinkEl);
  footerEl.appendChild(paraFooter);
  footerEl.appendChild(paraImageCreditsEl);

  divContainer.appendChild(footerEl);
};
const loadInitialHtml = () => {
  createHeader();
  createMainContainer();
  createFooter();
};

export default loadInitialHtml;
