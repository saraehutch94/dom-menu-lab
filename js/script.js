// Menu data structure

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

const mainEl = document.querySelector("main");
// console.log(mainEl);

// Task 1.1

mainEl.style.backgroundColor = "var(--main-bg)";
// console.log(mainEl);

// Task 1.2

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
// console.log(mainEl);

// Task 1.3

mainEl.setAttribute("class", "flex-ctr");
// console.log(mainEl);

// Task 2.0

const topMenuEl = document.getElementById("top-menu");
// console.log(topMenuEl);

// Task 2.1

topMenuEl.style.height = "100%";
// console.log(topMenuEl);

// Task 2.2

topMenuEl.style.background = "var(--top-menu-bg)";
// console.log(topMenuEl);

// Task 2.3

topMenuEl.setAttribute("class", "flex-around");
// console.log(topMenuEl);

// Task 3.0 --> copied to top of this script.js file

// Task 3.1

for (let link of menuLinks) {
    let anchor = document.createElement("a");
    anchor.setAttribute("href", link.href);
    anchor.innerHTML = link.text;
    topMenuEl.appendChild(anchor);
    console.log(anchor);
}

// DOM Menu Lab: Part 2:

// Task 4.0

const subMenuEl = document.getElementById("sub-menu");
// console.log(subMenuEl);

// Task 4.1

subMenuEl.style.height = "100%";
// console.log(subMenuEl);

// Task 4.2

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// console.log(subMenuEl);

// Task 4.3

subMenuEl.setAttribute("class", "flex-around");
// console.log(subMenuEl);

// Task 4.4

subMenuEl.style.position = "absolute";
// console.log(subMenuEl);

// Task 4.5

subMenuEl.style.top = "0";
// console.log(subMenuEl);

// Task 5.0 --> updated menuLinks array above

const topMenuLinks = document.querySelectorAll("a");
// console.log(topMenuLinks);

let showingSubMenu = false;
// console.log(showingSubMenu);

// Task 5.2

topMenuEl.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== "A") return;
  // console.log(evt.target.textContent);
  if (evt.target.classList.contains("active")) {
    evt.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  for (links of topMenuLinks) {
    links.classList.remove("active");
  }

  evt.target.setAttribute("class", "active");

  const linkObject = evt.target;
  
  for (link of menuLink) {
    if (linkObject.textContent === link.text && link.hasOwnProperty("subLinks")) {
      
  }

});

// Task 5.3
// (above)

// Task 5.4
// (above)

// Task 5.5
// (above)

// Task 5.6
// (above)
