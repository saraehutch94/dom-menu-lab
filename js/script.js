// Menu data structure

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

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
    // console.log(anchor);
}

// DOM Menu Lab: Part 2:

// Task 4.0

