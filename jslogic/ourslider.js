$('.section5_images').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots:true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:false,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

$('.slider_first').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll:1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:PrevArrowf,
  nextArrow:NextArrowf,
  fade:true
  
});