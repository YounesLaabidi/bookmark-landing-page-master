const content = [
  {
    title: `Bookmark in one click`,
    des: `Organize your bookmarks however you like. Our simple drag-and-drop interface 
    gives you complete control over how you manage your favourite sites.`,
  },
  {
    title: `Intelligent search`,
    des: `Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.`,
  },
  {
    title: `Share your bookmarks`,
    des: `Easily share your bookmarks and collections with others. Create a shareable 
    link that you can send at the click of a button.`,
  },
];
// get button
const buttons = document.querySelectorAll(".features-section__tab-indicator");
// get animated element
const tab = {
  image: document.querySelector(".features-section__illustration-image"),
  title: document.querySelector(".features-section__tab--description__title"),
  description: document.querySelector(
    ".features-section__tab-description__text"
  ),
};
// create keyframes
const keyframes = [{ opacity: 0.3 }, { opacity: 1 }];
// create options
const options = { duration: 700 };
buttons.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    tab.image.animate(keyframes, options);
    const current = document.querySelector(
      ".features-section__tab-indicator--active"
    );
    current.classList.remove("features-section__tab-indicator--active");
    e.target.classList.add("features-section__tab-indicator--active");

    switch (index) {
      case 0:
        tab.image.setAttribute(
          "src",
          "./assets/images/illustration-features-tab-1.svg"
        );
        tab.title.innerHTML = content[0].title;
        tab.description.innerHTML = content[0].des;
        break;
      case 1:
        tab.image.setAttribute(
          "src",
          "./assets/images/illustration-features-tab-2.svg"
        );
        tab.title.innerHTML = content[1].title;
        tab.description.innerHTML = content[1].des;
        break;
      case 2:
        tab.image.setAttribute(
          "src",
          "./assets/images/illustration-features-tab-3.svg"
        );
        tab.title.innerHTML = content[2].title;
        tab.description.innerHTML = content[2].des;
        break;
    }
  });
});
