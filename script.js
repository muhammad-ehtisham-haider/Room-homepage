    // var images = [' url(images/desktop-image-hero-1.jpg);', ' url(images/desktop-image-hero-2.jpg);', ' url(images/desktop-image-hero-1.jpg);'];
// var images = ["url('images/desktop-image-hero-1.jpg')","url('images/desktop-image-hero-3.jpg')","url('images/desktop-image-hero-2.jpg')"]
//     var i = 0;
//     document.getElementById("a").addEventListener('click' , function(){
//         if(i <=images.length-2){
//             i = ++i;
//         }else{
//             i = 0;
//         }
//         document.getElementById("left").style.background = images[i];
//     })




//     var image = ["url('images/desktop-image-hero-2.jpg')","url('images/desktop-image-hero-3.jpg')", "url('images/desktop-image-hero-1.jpg')"  ]
//     var a = 0;
//     document.getElementById("b").addEventListener('click' , function(){
//         if(a <=image.length-2){
//             a = ++a;
//         }else{
//             a = 0;
//         }
//         document.getElementById("left").style.background = image[a];
//     })

    
//     var image = ["url('images/desktop-image-hero-2.jpg')","url('images/desktop-image-hero-3.jpg')", "url('images/desktop-image-hero-1.jpg')"  ]
//     var a = 0;
//     document.getElementById("c").addEventListener('click' , function(){
//         if(a <=image.length-2){
//             a = ++a;
//         }else{
//             a = 0;
//         }
//         document.getElementById("left").style.background = image[a];
//     })



    function replace(){
        document.getElementById("show").style.display= "none"
        document.getElementById("show-1").style.display= "block"
        document.getElementById("left").style.backgroundImage = "url('images/desktop-image-hero-3.jpg')"
    }

    
    function replaceone(){
        document.getElementById("show-1").style.display= "none"
        document.getElementById("show-2").style.display= "block"
        document.getElementById("left").style.backgroundImage = "url('images/desktop-image-hero-2.jpg')"
    }

        
    function replacetwo(){
        document.getElementById("show-2").style.display= "none"
        document.getElementById("show").style.display= "block"
        document.getElementById("left").style.backgroundImage = "url('images/desktop-image-hero-1.jpg')"
    }


    function replacethree(){
        document.getElementById("show").style.display= "none"
        document.getElementById("show-2").style.display= "block"
        document.getElementById("left").style.backgroundImage = "url('images/desktop-image-hero-2.jpg')"
    }
    function replacefour(){
        document.getElementById("show-1").style.display= "none"
        document.getElementById("show").style.display= "block"
        document.getElementById("left").style.backgroundImage = "url('images/desktop-image-hero-1.jpg')"
    }
    function replacefive(){
        document.getElementById("show-2").style.display= "none"
        document.getElementById("show-1").style.display= "block"
        document.getElementById("left").style.backgroundImage = "url('images/desktop-image-hero-3.jpg')"
    }


