// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
// get button
const submit_button = document.getElementById("submit-button");
// get page main
const contact_page = document.getElementById("contact-page");
// add listener
submit_button.addEventListener("click", function (event) {
  // prevent default action (read online i should do this)
  event.preventDefault();

  // create new paragraph message
  const thank_you_message = document.createElement("p");
  thank_you_message.textContent = "Thank you for your message!";
  thank_you_message.classList.add("large-text");

  // remove everything on the page
  contact_page.innerHTML = "";
  contact_page.style.display = "flex";
  contact_page.style.justifyContent = "center";
  contact_page.style.alignItems = "center";

  // add the message
  contact_page.appendChild(thank_you_message);
});
