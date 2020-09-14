window.onscroll=function(){
    console.info(document.documentElement.scrollTop);
     var gptotop=document.getElementById("gototop") ;
     var header = document.getElementById("myH");
     
     if(document.documentElement.scrollTop >200 || document.documentElement.scrollTop >100|| document.documentElement.scrollTop >10){
       header.style.position="fixed";
        header.style.left=0;
       header.style.right=0;
      header.style.backgroundColor="rgb(255,255,255,0.9)"; 
        header.style.zIndex=9; 
        gototop.style.display="block";
    }
     else{
         header.style.position="relative";
        header.style.backgroundColor="none";
        gototop.style.display="none";
     }
    }
    // ĐĂNG NHẬP
    function validate() {
        var u = document.getElementById("tenID").value;
        var p1 = document.getElementById("passwordID").value;
        
          
        if(u== "") {
        alert("Vui lòng nhập tên!");
        return false;
        }
        if(p1 == "") {
        alert("Vui lòng nhập mật khẩu!");
        return false;
        }
        if( u.length>8 ){
        alert("Xin hãy điền đúng  số lượng tên đăng nhập!");
        return false;
        }
        alert("Đăng nhập thành công");
        return true;
        }
        // ĐĂNG KÍ
    function signup() {
        var u = document.getElementById("tenID").value;
        var p1 = document.getElementById("passwordID").value;
        var p2=document.getElementById("gmailID").value;
        var c=document.getElementById("phoneID").value;
        var KTSDT=isNaN(c);
     
          
        if(u== "") {
        alert("Vui lòng nhập tên!");
        return false;
        }
        if(p1 == "") {
        alert("Vui lòng nhập mật khẩu!");
        return false;
        }
        if(p2 == "") {
            alert("Vui lòng Gmail!");
            return false;
            }
        if(c == "") {
            alert("Vui lòng nhập số điện thoại!");
            return false;
         }   
        if( u.length>8 ){
        alert("Xin hãy điền đúng  số lượng tên đăng nhập!");
        return false;
        }
        if(KTSDT==true)
        {
            alert("Điện thoại phải được để dạng số");
            return false;
        }
        alert("ĐĂNG KÍ THÀNH CÔNG! ")
        return true;
    }
    //GO TO TOP
    function goToTop() {
        var timer = setInterval(function(){
            document.documentElement.scrollTop-=20;
            if(document.documentElement.scrollTop<=0)
    
              clearInterval(timer);
        }, 1);
    }
    //GIỚI THIỆU SẢN PHẨM
    function upDate(previewanh){
        var src=previewanh.src;
        var alt=previewanh.alt;
        document.getElementById('image').style.backgroundImage="url("+src+")"
    }
     //CLEAN
    $(document).ready(function() {
    $(".content > section:not(#rp)").hide()
    
    $(".tab a").click(function() {
        event.preventDefault();
        
        $(".tab a").removeClass('active')
        $(this).addClass('active')
    
        $('.content > section').hide()
        var v = $(this).attr('href')
        $(v).show()
    }) 
    })