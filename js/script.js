// Menu data structure

// Variable with array of objects assigned to it (creating menu items)
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
]

// DOM Menu Lab: Part 1

// Task 1.0

// Assigning the main element in HTML to variable "mainEl"
const mainEl = document.querySelector("main");

// Task 1.1

// Modifying main element in HTML's background color property that is assigned to the CSS variable "--main-bg"
mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2

// Modifying main element in HTML's innerHTMl property to include "SEI Rocks!" within h1 tags
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// Task 1.3

// Setting the class attribute of mainEl variable to "flex-ctr"
mainEl.setAttribute("class", "flex-ctr");

// Task 2.0

// Assigning the element in HTML with an id of "top-menu" to variable "topMenuEl"
const topMenuEl = document.getElementById("top-menu");

// Task 2.1

// Modifying variable topMenuEl's height property to 100%
topMenuEl.style.height = "100%";

// Task 2.2

// Modifying variable topMenuEl's background color property to the color assigned to CSS variable "--top-menu-bg"
topMenuEl.style.background = "var(--top-menu-bg)";

// Task 2.3

// Setting the class attribute of topMenuEl variable to "flex-around"
topMenuEl.setAttribute("class", "flex-around");

// Task 3.0 --> copied to top of this script.js file

// Task 3.1

/*
- Looping through each object within the menuLinks array
- Creating anchor/link elements for each object
- Giving anchor elements an attribute of "href" equal to the href attribute within each object
- Modifying anchor text equal to the text property's value within each object
- Appending each anchor to the topMenuEl variable, holding the top menu items
*/
for (let link of menuLinks) {
    let anchor = document.createElement("a");
    anchor.setAttribute("href", link.href);
    anchor.innerHTML = link.text;
    topMenuEl.appendChild(anchor);
}

// DOM Menu Lab: Part 2:

// Task 4.0

// Assign element in HTML with id of "sub-menu" to variable subMenuEl
let subMenuEl = document.getElementById("sub-menu");

// Task 4.1

// Modifying subMenuEl's height property to 100%
subMenuEl.style.height = "100%";

// Task 4.2

// Modifying subMenuEl's background color property to the color assigned to CSS variable "--sub-menu-bg"
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Task 4.3

// Setting the class attribute of subMenuEl variable to "flex-around"
subMenuEl.setAttribute("class", "flex-around");

// Task 4.4

// Modifying subMenuEl's position property to "absolute"
subMenuEl.style.position = "absolute";

// Task 4.5

// Modifying subMenuEl's top property to "0"
subMenuEl.style.top = "0";

// Task 5.0 --> updated menuLinks array above

// Assigning all anchor elements in HTML to variable "topMenuLinks"
const topMenuLinks = document.querySelectorAll("a");

// Setting the boolean value of showingSubMenu variable to false
let showingSubMenu = false;

// Declaring currentLink variable (to keep track of current link being clicked)
let currentLink;

// Task 5.2

/*
- Add event listener to topMenuEl variable
- Once event object is clicked on, apply the preventDefault() method to it
- If the event object is not an anchor/link, exit the event listener
- If the event object has a class of "active", remove active class from it
- Set the showingSubMenu boolean value to false
- Modify the subMenuEl's top property to equal "0"
- Exit the event listener
*/
topMenuEl.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "A") return;
  if (evt.target.classList.contains("active")) {
    evt.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  /*
  - For...of loop to iterate over the anchors/links within topMenuLinks
  - For each anchor, remove it's "active" class
  */
  for (links of topMenuLinks) {
    links.classList.remove("active");
  }

  // Modify mainEl's text to reflect the anchor's text clicked on in topMenuLinks
  mainEl.innerHTML = `<h1>${evt.target.textContent}</h1>`;

  // Set class attribute of "active" to event object
  evt.target.setAttribute("class", "active");

  /*
  - Use find() method on menuLinks
  - Will return "falsy"
  - If the index(object)'s text of menuLink matches the text content of the event object, will return as "truthy"
  - Assign it to currentLink variable
  */
  currentLink = menuLinks.find(function(link) {
    return link.text === evt.target.textContent;
  });

  /*
  - If the currentLink variable has a property of "subLinks", change the showingSubMenu boolean value to true
  - Otherwise, change the showingSubMenu boolean value to false
  */
  if (currentLink.hasOwnProperty("subLinks")) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }

  /*
  - If the boolean value of showingSubMenu is true, pass the currentLink variable
  with attention to it's subLinks property to the buildSubMenu function
  - Change the top property on subMenuEl to 100%
  - If the boolean value of showingSubMenu is false, change subMenuEl's top property to 0
  */
  if (showingSubMenu === true) {
    buildSubMenu(currentLink.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }

  /*
  - The buildSubMenu function takes one argument
  - buildSubMenu clears the text content of subMenuEl
  - A for loop is constructed within buildSubMenu
  - The loop creates a new anchor element to the DOM
  - The new anchor element is given an href attribute that has the same value as the subLinks href property
  - The new anchor's text content will be set to the same value as the subLinks text property
  - The new anchor is then appended to the subMenuEl variable
  */
  function buildSubMenu (clickedLink) {
    subMenuEl.textContent = "";
    for (link of clickedLink) {
      let newAnchor = document.createElement("a");
      newAnchor.setAttribute("href", link.href);
      newAnchor.textContent = link.text;
      subMenuEl.append(newAnchor);
    }
  }
});

// Task 5.3 - 5.8 --> above

// Task 6.0 - 6.4 --> below

/*
- Event listener is attached to subMenuEl
- When subMenuEl is clicked, the preventDefault() method is ran on the event object
- If the event object has a tag name of "A" (anchor), the function will not continue to run
- If the event object does not have a tag name of "A", the boolean value of showingSubMenu will be false
- The top property of subMenuEl will be changed to zero
- A for loop is executed to run through all of the anchors in topMenuLinks and removes their class of "active"
- The innnerHTML content of mainEl is changed to reflect the event object's text content, surrounded by an h1 tag
*/
subMenuEl.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "A") return;
  showingSubMenu = false;
  subMenuEl.style.top = "0";

  for (links of topMenuLinks) {
    links.classList.remove("active");
  }

  mainEl.innerHTML = `<h1>${evt.target.textContent}</h1>`;

});
