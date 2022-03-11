const createCard = $("<div>");
createCard.addClass("card");
createCard.css("width", "18rem");
createCard.html(`<img src='./icons/${data.title}.png' class='card-img-top' />`);

const cardBody = $("<div>");
cardBody.addClass("card-body");
createCard.append(cardBody);
const createTitle = $("<h5>");
createTitle.addClass("card-title");
createTitle.text(data.name);
cardBody.append(createTitle);
const createSub = $("<h6>");
createSub.addClass("card-subtitle mb-2");
createSub.text(data.title);
cardBody.append(createSub);
const createPara1 = $("<p>");
const createPara2 = $("<p>");
const createPara3 = $("<p>");
createPara1.addClass("card-text");
createPara1.text(data.id);
cardBody.append(createPara1);
createPara2.addClass("card-text");
createPara2.text(data.email);
cardBody.append(createPara2);
createPara3.addClass("card-text");

data.title === "Manager"
  ? createPara3.text(`Office Number: ${data.officeNumber}`)
  : data.title === "Engineer"
  ? createPara3.text(`GitHub URL: ${data.github}`)
  : data.title === "Intern"
  ? createPara3.text(`School: ${data.school}`)
  : console.error("error");
cardBody.append(createPara1);
