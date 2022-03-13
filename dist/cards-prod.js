
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
  createPara1.text(`ID: ${data.id}`);
  cardBody.append(createPara1);
  createPara2.addClass("card-text");
  createPara2.html(`<a href="mailto:${data.email}">${data.email}</a>`);
  cardBody.append(createPara2);
  createPara3.addClass("card-text");
  cardBody.append(createPara3);

  data.title === "Manager"
    ? createPara3.text(`Office #: ${data.officeNumber}`)
    : data.title === "Engineer"
    ? createPara3.html(`<a href="https://github.com/${data.github}">GitHub: ${data.github}</a>`)
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

let data = [{"name":"cory","id":1234,"email":"cory@gmail.com","title":"Manager","officeNumber":1222},{"name":"Alex","id":7777,"email":"amachkel@gmail.com","title":"Engineer","github":"amachkel"},{"name":"Nora","id":99986,"email":"nora@gmail.com","title":"Engineer","github":"nornor"},{"name":"Seamus","id":12211,"email":"seamus@gmail.com","title":"Intern","school":"GA Tech"}];
generateTeam(data);

