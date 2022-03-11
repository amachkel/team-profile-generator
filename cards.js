renderCard = (data) => {
    console.log(data);
  const createCard = $("<div>");
  const main = $("#main");
  createCard.addClass("card");
  createCard.css("width", "18rem");
  createCard.html(
    `<img src='./icons/${data.title}.png' class='card-img-top' />`
  );
  main.append(createCard);
  renderCardBody(data, createCard);
};

renderCardBody = (data, createCard) => {
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
};

function generateTeam(data) {
  console.log(data.length);
  data.forEach((obj) => {
    console.log(obj);
    renderCard(obj);
  });
}
// let data = [
//   {
//     name: "Cory",
//     id: 234,
//     email: "cory.harkins@gmail.com",
//     title: "Manager",
//     officeNumber: 1211,
//   },
//   {
//     name: "Alex",
//     id: 456,
//     email: "amachkel@gmail.com",
//     title: "Engineer",
//     github: "amachkel",
//   },
//   {
//     name: "Seamus",
//     id: 345,
//     email: "seabutter@gmail.com",
//     title: "Intern",
//     school: "gatech",
//   },
// ];
module.exports = generateTeam;

