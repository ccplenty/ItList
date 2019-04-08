function couch()
{
    $(".card:nth-child(5) .prod_image").attr('src', 'http://millioncph.com/wp-content/uploads/2018/04/MILLION_PLENTY_SOFA_ROSE_GREY_CLOSEUP.jpg');
    $(".card:nth-child(6) .prod_image").attr('src', 'http://leibal.com/wp-content/uploads/2018/08/leibal_plenty-sofa_million_2.jpg');
}

function disco()
{
    let prodImg = $('.prod_image');
    setInterval(function () {
        prodImg.fadeIn(2000, function () {
            prodImg.fadeOut(2000, function () {
                prodImg.fadeIn(3000)
            });
        });}, 2000);
}

$(document).ready(function(){
    couch();

    $(".prod_image").each(function() {
        if(!$(this).attr("src").length) {
            // this.src = 'http://clipart-library.com/image_gallery/267356.png'
            this.src = 'https://www.invotide.com/images/icon-demo.png'
        }
    });

    disco();

});