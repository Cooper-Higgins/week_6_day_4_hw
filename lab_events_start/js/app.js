document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector("#new-item-form");

const handleFormSubmit = function(event){
  event.preventDefault();
  const newListItem = document.createElement("li")
  newListItem.textContent = 
  `Title:
  ${event.target.title.value}
  Author:
  ${event.target.author.value}
  Category:
  ${event.target.category.value}
  `;

  document.querySelector("ul").appendChild(newListItem);
  document.getElementById("new-item-form").reset();
}
form.addEventListener("submit", handleFormSubmit);

})
