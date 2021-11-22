let portfolio = [
  { name: "Launch", img: "worka.jpg" },
  { name: "Security", img: "workb.jpg" },
  { name: "Studio", img: "workc.jpg" },
  { name: "Portfolio", img: "workd.jpg" },
  { name: "Blog", img: "worke.jpg" },
  { name: "POS", img: "workf.jpg" },
  { name: "Logo Mockup", img: "workg.jpg" },
  { name: "Restaurant", img: "workh.jpg" },
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
      }"><img src="./img/portfolio/${portfolioItem["img"]}" id="${
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
  let portFolioHover = (id, property) => {
    if (/^work.*/.test(id)) {
      overlayId = id.slice(4, 5);
      $(".portfolio-description" + overlayId).css("display", property);
    } else {
      return;
    }
  };
  $(".portfolioItem").mouseenter((e) => {
    portFolioHover(e.target.id, "block");
  });
  // mouse leave effect
  $(".portfolioItem").mouseleave((e) => {
    portFolioHover(e.target.id, "none");
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
      $("#name").val("");
      $("#email").val("");
      $("#message").val("");
      $(".modal-body .content").text(
        `${name} we have received your message. Thank you for reaching out to us.`
      );
      $(".modal").show();
    }
  });

  // close modal
  $(".close").click(() => {
    $(".modal").hide();
  });
});
