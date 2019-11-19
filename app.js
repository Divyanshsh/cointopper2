$(document).ready(function(){
    $('.container-1').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:  true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
              breakpoint: 775,
              settings: {
                slidesToShow: 5,
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

  function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}