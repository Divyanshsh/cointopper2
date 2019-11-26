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
        $(".drop-down-para p").toggle();
        $(".drop-down-para").toggle(); 
        $(".icon-link").toggle();  
    });

    $(".drop-down-img-two").click(function () {
        // $(".drop-down-two h6").toggle(500);  
        $(".drop-down-two iframe").toggle(); 
        // $(".iframe-container").toggle(500);   
    });

    $(".drop-down-img-three").click(function () { 
        $(".drop-down-content").toggle();    
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