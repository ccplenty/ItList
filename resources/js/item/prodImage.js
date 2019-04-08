$(document).ready(function(){
    $(".prod_image").each(function() {
        if(!$(this).attr("src").length) {
            this.src = 'http://clipart-library.com/image_gallery/267356.png'
        }
    });
});