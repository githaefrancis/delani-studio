let portfolio = [
  { name: "Launch", img: "work1.jpg" },
  { name: "Security", img: "work2.jpg" },
  { name: "Studio", img: "work3.jpg" },
  { name: "Portfolio", img: "work4.jpg" },
  { name: "Blog", img: "work5.jpg" },
  { name: "POS", img: "work6.jpg" },
  { name: "Logo Mockup", img: "work7.jpg" },
  { name: "Restaurant", img: "work8.jpg" },
];

//run javascript when DOM is ready
$(() => {
  $("header").height($(window).height());

  $("p").addClass("text-center");

  // Populate the portfolio section
  portfolio.forEach((portfolioItem) => {
    $("#portfolio").append(
      `<div class="col-lg-3 col-md-3 col-sm-12 portfolioItem  px-2" id="${
        portfolioItem["img"]
      }"><img src="../img/portfolio/${portfolioItem["img"]}" id="${
        portfolioItem["img"]
      }" class="img-fluid"><div class="portfolio-description portfolio-description${portfolioItem[
        "img"
      ].slice(4, 5)}"><h4>${portfolioItem["name"]}</h1></div></div>`
    );
  });
  // Toggle between what we do icons and description
  $(".design").click((e) => {
    $(".design-description").toggle();
    $("#design").toggle();
    $(".portfolioItem").addClass("hello");
  });
  $(".development").click((e) => {
    $(".development-description").toggle();
    $("#development").toggle();
  });
  $(".management").click((e) => {
    $(".management-description").toggle();
    $("#management").toggle();
  });

  //hover effect on porfolio

  $(".portfolioItem").mouseenter((e) => {
    id = e.target.id;
    console.log(typeof id);
    console.log(e.target.id);
    console.log(/^work.*/.test(id));
    if (/^work.*/.test(id)) {
      console.log(e.target.id);
      console.log("hellllll0");
      overlayId = id.slice(4, 5);
      $(".portfolio-description" + overlayId).css("display", "block");
    } else {
      return;
    }
  });
  // mouse leave effect
  $(".portfolioItem").mouseleave((e) => {
    id = e.target.id;
    console.log(typeof id);
    console.log(e.target.id);
    console.log(/^work.*/.test(id));
    if (/^work.*/.test(id)) {
      console.log(e.target.id);
      console.log("hellllll0");
      overlayId = id.slice(4, 5);
      $(".portfolio-description" + overlayId).css("display", "none");
    } else {
      return;
    }
  });

  // handle form submission

  $("#contact-form").submit((e) => {
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();
    e.preventDefault();
    if (!name || !email || !message) {
      alert("please fill in all the fields");
    } else {
      alert(
        `${name} we have received your message. Thank you for reaching out to us.`
      );
      $("#name").val("");
      $("#email").val("");
      $("#message").val("");
    }
  });
});
