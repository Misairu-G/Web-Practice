var list = document.createElement('ul');
var info = document.createElement('p');

/*
Element.querySelector() Returns the first element that is a descendant of the element on which 
it is invoked that matches the specified group of selectors.
*/
var html = document.querySelector('h1');

info.textContent = 'Below is a dynamic list. Click the Title (in h1 style) to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

document.getElementById("Title").title = "Click me to add a item to the list";

var click_me = document.getElementById("click_me");
click_me.onclick = function () {
  alert("Nothing happened.");
};

html.onclick = function () {
  var listItem = document.createElement('li');
  var listContent = prompt('What content do you want the list item to have?', "");
  if (listContent !== "" && listContent !== null) {
    listItem.textContent = listContent;
    list.appendChild(listItem);
  }

  listItem.onclick = function (e) {
    e.stopPropagation();
    var listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  };
};