/**
 * Created by Ran on 5/8/2016.
 */
function init(){
    changeBackgroundColor();
    slick();
}

function changeBackgroundColor(){
    $(".portfolio-item").hover(
        function(){

            $(this).find(".backgroudHover").animate({opacity:'1'},'slow');
            $(this).find(".textCenter").animate({opacity:'1', backgroundColor:'#000000'},'slow');
            $(this).find(".discription").animate({backgroundColor: '#000000', color:'#ffffff'}, 'slow');
        },
        function(){
            $(this).find(".backgroudHover").animate({opacity:'0.8'},'slow');
            $(this).find(".textCenter").animate({opacity:'0', backgroundColor:'#ffffff'},'slow');
            $(this).find(".discription").animate({backgroundColor: '#ffffff', color:'#000000'}, 'slow');
        }
    );
}

function slick(){
    $('.slick-test').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
}
init();