$(document).ready(function(){
    $('.container-1').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay:  true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 300,
        dots: true,
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 775,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 680,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 550,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              }
        ]
    });
  });

  $(document).ready(function(){
    $('.posts').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:  true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    }); 
  });

  function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}