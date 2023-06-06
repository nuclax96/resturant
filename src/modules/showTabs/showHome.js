import clearContainer from "../helperFunctions/clearMainContent";

const createMainContainer = () => {
  const mainContentContainer = document.querySelector("#main-div-content");

  const headingMainEl = document.createElement("p");
  const tagLineEl = document.createElement("p");
  tagLineEl.id = "tagLine-text";
  headingMainEl.textContent = "Coffee with Friends:";
  headingMainEl.id = "heading-main-content";
  tagLineEl.textContent =
    "Where every cup is a conversation. ☕  Whether you want to catch up with an old friend, have a meeting with a colleague, or just relax with a good book, Coffee with Friends has something for everyone. From espresso to cappuccino, from muffins to sandwiches, we have it all. Come and experience the warm and friendly atmosphere of Coffee with Friends today. You’ll be glad you did.";
  mainContentContainer.appendChild(headingMainEl);
  mainContentContainer.appendChild(tagLineEl);
};

const showHome = () => {
  clearContainer();
  createMainContainer();
};

export default showHome;
