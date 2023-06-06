const createDiv = (divClass) => {
  const createdDiv = document.createElement("div");
  createdDiv.classList.add(divClass);
  return createdDiv;
};

const insertIntoContainer = (container, child) => {
  console.log(child);
  container.appendChild(child);
};

const createHeading = (size, text, headingClass) => {
  const createdEl = document.createElement(size);
  createdEl.textContent = text;
  createdEl.classList.add(headingClass);
  return createdEl;
};
const createImage = (src, imgClass) => {
  const createdEl = document.createElement("img");

  createdEl.setAttribute("src", src);
  createdEl.classList.add(imgClass);
  return createdEl;
};
const createParagraph = (txt, paraClass) => {
  const createdEl = document.createElement("p");
  createdEl.textContent = txt;
  paraClass ? createdEl.classList.add(paraClass) : "";
  //   createdEl.classList.add(imgClass);
  return createdEl;
};

export {
  createDiv,
  insertIntoContainer,
  createHeading,
  createImage,
  createParagraph,
};
