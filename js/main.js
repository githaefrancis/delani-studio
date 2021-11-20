let portfolioItems = [
  "work1.jpg",
  "work2.jpg",
  "work3.jpg",
  "work4.jpg",
  "work5.jpg",
  "work6.jpg",
  "work7.jpg",
  "work8.jpg",
];

//run javascript when DOM is ready
$(() => {
  $("header").height($(window).height());

  $("p").addClass("text-center");

  // Populate the portfolio section
  portfolioItems.forEach((portfolioItem) => {
    $("#portfolio").append(
      `<div class="col-lg-3 portfolioItem px-2" id="${portfolioItem}"><img src="../img/portfolio/${portfolioItem}" class="img-fluid"></div>`
    );
  });
});
