// document.querySelector('.drop-down-img-one').addEventListener('click',function(){
//    let dropDown = document.querySelector('.drop-down');
//    let dropDownPara = document.querySelectorAll('.drop-down-para');
//    if(dropDown.style.height === 'auto' && dropDownPara.style.display === 'block'){
//     dropDown.style.height = 'auto';
//     dropDownPara.style.display = 'none';
//    } else{
//     dropDown.style.height = 'auto';
//     dropDownPara.style.display = 'block';
//    }
// });


$(document).ready(function () {
    $(".drop-down-img-one").click(function () {
        $(".drop-down-para p").toggle(400);
        $(".drop-down-para").toggle(400); 
        $(".icon-link").toggle(400);  
    });

    $(".drop-down-img-two").click(function () {
        // $(".drop-down-two h6").toggle(500);  
        $(".drop-down-two iframe").toggle(400); 
        // $(".iframe-container").toggle(500);   
    });

    $(".drop-down-img-three").click(function () { 
        $(".drop-down-content").toggle(400);    
    });
});

$(document).ready(function(){
    $('.posts').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:  true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true
    }); 
  });

  $(document).ready(function(){
    $('.blog-posts').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:  true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 600,
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