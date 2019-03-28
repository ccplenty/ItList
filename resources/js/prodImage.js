$(document).ready(function(){
    $(".prod_image").each(function() {
        console.log(this);
        console.log();

        if(!$(this).attr("src").length) {
            console.log('OverWrite');
            console.log(this.src);
            this.src = 'https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-part-2/512/erase_delete_remove_wipe_out-512.png'
        }
    });
});