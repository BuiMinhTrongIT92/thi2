$(document).ready(function(){
    $(".thumbnail img").click(function(){
        $("#mainImg").attr("src",$(this).attr('src'))
    })
})