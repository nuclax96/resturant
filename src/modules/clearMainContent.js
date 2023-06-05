const clearContainer = () => {
  const divContainer = document.querySelector("#main-div-content");
  while (divContainer.hasChildNodes()) {
    divContainer.removeChild(divContainer.lastChild);
  }
};

export default clearContainer;
