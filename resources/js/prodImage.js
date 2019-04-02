$(document).ready(function(){
    $(".prod_image").each(function() {
        console.log(this);
        console.log();

        if(!$(this).attr("src").length) {
            console.log('OverWrite');
            console.log(this.src);
            this.src = 'http://clipart-library.com/image_gallery/267356.png'
        }
    });
});