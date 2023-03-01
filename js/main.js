const blogAsideItems = document.querySelectorAll(".blog__aside-item");

for (let i = 0; i < blogAsideItems.length; i++) {
  blogAsideItems[i].addEventListener("click", () => {
    for (let j = 0; j < blogAsideItems.length; j++) {
      blogAsideItems[j].classList.remove("blog__aside-item--active");
    }
    blogAsideItems[i].classList.add("blog__aside-item--active");
  });
}

$(".popular__inner").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  variableWidth: true,
});
