function increaseCartNumber () {
    cart = document.querySelector(".quantity").innerText;
    if (cart > 0) {
        document.querySelector(".number-of-item").innerText = cart;
        document.querySelector(".number-of-item").style.display = "block"
    }
}



function toggleCart() {
    cartDisplay = document.querySelector(".cart-active").style.display;
    if (cartDisplay == "none") {
        return openCart();
    } else {
        closeCart();
    }
}


function closeCart() {
    document.querySelector(".cart-active").style.display = "none"
}

function openCart() {
    cart = document.querySelector(".quantity").innerText;
    if (cart == 0) {
        document.querySelector(".cart-active").style.display = "block";
        document.querySelector(".number-of-item").style.display = "none";
        
    }
    
   
}

document.querySelector(".cart").addEventListener("click", function closeCart2(){
    cartDisplay2 = document.querySelector(".cart-active2").style.display;
    cart = document.querySelector(".quantity").innerText;
    if (cartDisplay2 == "block") {
        document.querySelector(".cart-active2").style.display = "none";
    } else if (cart > 0) {
        totalPrice = cart * 125.00;
        document.querySelector(".bold-text").innerText = "$"+parseFloat(totalPrice).toFixed(2);
        document.querySelector(".price-and-quantity").innerText = "$125.00 x " + cart;
        document.querySelector(".cart-active2").style.display = "block";
        
    }
})

function deleteItem() {
    document.querySelector(".quantity").innerText = "0";
    document.querySelector(".cart-active2").style.display = "none";
    document.querySelector(".number-of-item").style.display = "none";

    if (cart == 0) {
        document.querySelector(".cart-active").style.display = "block";
    }
}


let quantity = 0;

function increaseQuantity() {
    quantity += 1;
    document.querySelector(".quantity").innerText = quantity;
}

function reduceQuantity() {
    if (quantity > 0) {
        quantity -= 1;
        document.querySelector(".quantity").innerText = quantity;
    } else {
        quantity = 0;
    }
   
}

lightBox = document.querySelector(".lightbox");
thumbNail1 = document.querySelector(".thumbnail1");
thumbNail2 = document.querySelector(".thumbnail2");
thumbNail3 = document.querySelector(".thumbnail3");
thumbNail4 = document.querySelector(".thumbnail4");
thumbContainer1 = document.querySelector(".thumbnail1-container");
thumbContainer2 = document.querySelector(".thumbnail2-container");
thumbContainer3 = document.querySelector(".thumbnail3-container");
thumbContainer4 = document.querySelector(".thumbnail4-container");
header = document.querySelector("header");
leftSide = document.querySelector(".left-side");
rightSide = document.querySelector(".right-side");
lightBoxPic0 = document.querySelector(".lightbox-image")
lightBoxPic1 = document.querySelector(".lightbox-image1");
lightBoxPic2 = document.querySelector(".lightbox-image2");
lightBoxPic3 = document.querySelector(".lightbox-image3");
lightBoxPic4 = document.querySelector(".lightbox-image4");
cartDesc = document.querySelector(".cart-description");

function closeLightBox() {
    lightBox.style.display = "none";
    thumbNail1.style.opacity = "1";
    thumbNail2.style.opacity = "1";
    thumbNail3.style.opacity = "1";
    thumbNail4.style.opacity = "1";
    thumbContainer1.style.borderStyle = "none";
    thumbContainer2.style.borderStyle = "none";
    thumbContainer3.style.borderStyle = "none";
    thumbContainer4.style.borderStyle = "none";
    document.body.style.backgroundColor = "white";
    header.style.filter = "brightness(100%)";
    leftSide.style.filter = "brightness(100%)";
    rightSide.style.filter = "brightness(100%)";
    header.style.borderBottomColor = "#ece6e6";
    lightBoxPic1.style.opacity = "1"
    lightBoxPic2.style.opacity = "1"
    lightBoxPic3.style.opacity = "1"
    lightBoxPic4.style.opacity = "1"
}

function openLightBox1() {
    if (lightBox.style.display === "none") {
        lightBox.style.display = "flex";
        lightBoxPic0.src = "images/image-product-1.jpg";
        thumbNail1.style.opacity = "0.3";
        thumbContainer1.style.borderStyle = "solid";
        document.body.style.backgroundColor = "#404040";
        header.style.filter = "brightness(50%)";
        leftSide.style.filter = "brightness(50%)";
        rightSide.style.filter = "brightness(50%)";
        header.style.borderBottomColor = "#404040";
        lightBoxPic1.style.opacity = "0.3";
        cartDesc.style.opacity = "1";
        cartDesc.style.backgroundColor = "white";
      

    } else {
        closeLightBox()
    }
   
}

function openLightBox2() {
    if (lightBox.style.display === "none") {

        lightBox.style.display = "flex";
        lightBoxPic0.src = "images/image-product-2.jpg";
        thumbNail2.style.opacity = "0.3";
        thumbContainer2.style.borderStyle = "solid";
        document.body.style.backgroundColor = "#404040";
        header.style.filter = "brightness(50%)";
        leftSide.style.filter = "brightness(50%)";
        rightSide.style.filter = "brightness(50%)";
        header.style.borderBottomColor = "#404040";
        lightBoxPic2.style.opacity = "0.3"

    } else {
        closeLightBox();
    }
   
}

function openLightBox3() {
    if (lightBox.style.display === "none") {
        lightBox.style.display = "flex";
        lightBoxPic0.src = "images/image-product-3.jpg";
        thumbNail3.style.opacity = "0.3";
        thumbContainer3.style.borderStyle = "solid";
        document.body.style.backgroundColor = "#404040";
        header.style.filter = "brightness(50%)";
        leftSide.style.filter = "brightness(50%)";
        rightSide.style.filter = "brightness(50%)";
        header.style.borderBottomColor = "#404040";
        lightBoxPic3.style.opacity = "0.3"
    } else {
        closeLightBox();
    }
    
}

function openLightBox4() {
    if (lightBox.style.display === "none") {
        lightBox.style.display = "flex";
        lightBoxPic0.src = "images/image-product-4.jpg";
        thumbNail4.style.opacity = "0.3";
        thumbContainer4.style.borderStyle = "solid";
        document.body.style.backgroundColor = "#404040";
        header.style.filter = "brightness(50%)";
        leftSide.style.filter = "brightness(50%)";
        rightSide.style.filter = "brightness(50%)";
        header.style.borderBottomColor = "#404040";
        lightBoxPic4.style.opacity = "0.3"
    } else {
        closeLightBox();
    }
    
}


var imgArray = new Array()

imgArray[0] = new Image();
imgArray[0].src = "images/image-product-1.jpg";

imgArray[1] = new Image();
imgArray[1].src = "images/image-product-2.jpg";

imgArray[2] = new Image();
imgArray[2].src = "images/image-product-3.jpg";

imgArray[3] = new Image();
imgArray[3].src = "images/image-product-4.jpg";



function nextImage() {
    var img = document.getElementById("lightbox");
    for(var i = 0; i < imgArray.length;i++) {
        if (imgArray[i].src == img.src) {
            if(i === imgArray.length){
                document.getElementById("lightbox").src = imgArray[0].src
                break;
            }
            document.getElementById("lightbox").src = imgArray[i+1].src
            break;
        }
       
    }
    if (imgArray[1].src == img.src) {
        lightBoxPic2.style.opacity = "0.3";
        lightBoxPic1.style.opacity = "1";
        thumbNail2.style.opacity = "0.3";
        thumbNail1.style.opacity = "1";
        thumbContainer2.style.borderStyle = "solid";
        thumbContainer1.style.borderStyle = "none";
        thumbContainer3.style.borderStyle = "none";
        thumbContainer4.style.borderStyle = "none";
    } else {
        lightBoxPic2.style.opacity = "1";
    }

    if (imgArray[2].src == img.src) {
        lightBoxPic3.style.opacity = "0.3";
        lightBoxPic2.style.opacity = "1";
        thumbNail3.style.opacity = "0.3";
        thumbNail2.style.opacity = "1";
        thumbContainer3.style.borderStyle = "solid";
        thumbContainer1.style.borderStyle = "none";
        thumbContainer2.style.borderStyle = "none";
        thumbContainer4.style.borderStyle = "none";
    } else {
        lightBoxPic3.style.opacity = "1";
    }

    if (imgArray[3].src == img.src) {
        lightBoxPic4.style.opacity = "0.3";
        lightBoxPic3.style.opacity = "1";
        thumbNail4.style.opacity = "0.3";
        thumbNail3.style.opacity = "1";
        thumbContainer4.style.borderStyle = "solid";
        thumbContainer1.style.borderStyle = "none";
        thumbContainer2.style.borderStyle = "none";
        thumbContainer3.style.borderStyle = "none";
    } else {
        lightBoxPic4.style.opacity = "1"
    }
}



function prevImage() {
    var img = document.getElementById("lightbox");
    for(var i = imgArray.length-1;i >=0 ;i--) {
        if (imgArray[i].src == img.src) {
            if(i === imgArray.length){
                document.getElementById("lightbox").src = imgArray[3].src
                break;
            }
            document.getElementById("lightbox").src = imgArray[i-1].src;
            break;
        }
       
    }

    if (imgArray[1].src == img.src) {
        lightBoxPic2.style.opacity = "0.3";
        lightBoxPic1.style.opacity = "1";
        thumbNail2.style.opacity = "0.3";
        thumbNail1.style.opacity = "1";
        thumbNail3.style.opacity = "1";
        thumbNail4.style.opacity = "1";
        thumbContainer2.style.borderStyle = "solid";
        thumbContainer1.style.borderStyle = "none";
        thumbContainer3.style.borderStyle = "none";
        thumbContainer4.style.borderStyle = "none";
    } else {
        lightBoxPic2.style.opacity = "1";
       
    }

    if (imgArray[2].src == img.src) {
        lightBoxPic3.style.opacity = "0.3";
        lightBoxPic2.style.opacity = "1";
        thumbNail3.style.opacity = "0.3";
        thumbNail2.style.opacity = "1";
        thumbNail1.style.opacity = "1";
        thumbNail4.style.opacity = "1";
        thumbContainer3.style.borderStyle = "solid";
        thumbContainer1.style.borderStyle = "none";
        thumbContainer2.style.borderStyle = "none";
        thumbContainer4.style.borderStyle = "none";
    } else {
        lightBoxPic3.style.opacity = "1"
    }

    if (imgArray[3].src == img.src) {
        lightBoxPic4.style.opacity = "0.3";
        lightBoxPic3.style.opacity = "1";
        thumbNail3.style.opacity = "0.3";
        thumbNail4.style.opacity = "1";
        thumbNail1.style.opacity = "1";
        thumbNail3.style.opacity = "1";
        thumbContainer4.style.borderStyle = "solid";
        thumbContainer1.style.borderStyle = "none";
        thumbContainer2.style.borderStyle = "none";
        thumbContainer3.style.borderStyle = "none";
    } else {
        lightBoxPic4.style.opacity = "1"
    }

    if (imgArray[0].src == img.src) {
        lightBoxPic1.style.opacity = "0.3";
        lightBoxPic4.style.opacity = "1";
        thumbNail1.style.opacity = "0.3";
        thumbNail2.style.opacity = "1";
        thumbNail3.style.opacity = "1";
        thumbNail4.style.opacity = "1";
        thumbContainer1.style.borderStyle = "solid";
        thumbContainer4.style.borderStyle = "none";
        thumbContainer2.style.borderStyle = "none";
        thumbContainer3.style.borderStyle = "none";
    } else {
        lightBoxPic4.style.opacity = "1"
    }
}
var img = document.getElementById("lightbox");

function hoverOver1() {
    if (imgArray[1].src == img.src) {
        lightBoxPic2.style.opacity = "0.3"
    }else {
        lightBoxPic2.style.opacity = "0.5"
    }
   
}

function hoverLeave1() {
    if (imgArray[1].src == img.src) {
        lightBoxPic2.style.opacity = "0.3"
    }else {
        lightBoxPic2.style.opacity = "1"
    }
}


function hoverOver0() {
    if (imgArray[0].src == img.src) {
        lightBoxPic1.style.opacity = "0.3"
    }else {
        lightBoxPic1.style.opacity = "0.5"
    }
   
}

function hoverLeave0() {
    if (imgArray[0].src == img.src) {
        lightBoxPic1.style.opacity = "0.3"
    }else {
        lightBoxPic1.style.opacity = "1"
    }
}



function hoverOver2() {
    if (imgArray[2].src == img.src) {
        lightBoxPic3.style.opacity = "0.3"
    }else {
        lightBoxPic3.style.opacity = "0.5"
    }
   
}

function hoverLeave2() {
    if (imgArray[2].src == img.src) {
        lightBoxPic3.style.opacity = "0.3"
    }else {
        lightBoxPic3.style.opacity = "1"
    }
}


function hoverOver3() {
    if (imgArray[3].src == img.src) {
        lightBoxPic4.style.opacity = "0.3"
    }else {
        lightBoxPic4.style.opacity = "0.5"
    }
   
}

function hoverLeave3() {
    if (imgArray[3].src == img.src) {
        lightBoxPic4.style.opacity = "0.3"
    }else {
        lightBoxPic4.style.opacity = "1"
    }
}

function updateLightBox1() {
    img.src = imgArray[0].src;
    lightBoxPic2.style.opacity = "1";
    lightBoxPic3.style.opacity = "1";
    lightBoxPic4.style.opacity = "1";
    thumbNail1.style.opacity = "0.3";
    thumbNail2.style.opacity = "1";
    thumbNail3.style.opacity = "1";
    thumbNail4.style.opacity = "1";
    thumbContainer1.style.borderStyle = "solid";
    thumbContainer4.style.borderStyle = "none";
    thumbContainer2.style.borderStyle = "none";
    thumbContainer3.style.borderStyle = "none";

}


function updateLightBox2() {
    img.src = imgArray[1].src;
    lightBoxPic1.style.opacity = "1";
    lightBoxPic3.style.opacity = "1";
    lightBoxPic4.style.opacity = "1";
    thumbNail2.style.opacity = "0.3";
    thumbNail1.style.opacity = "1";
    thumbNail3.style.opacity = "1";
    thumbNail4.style.opacity = "1";
    thumbContainer2.style.borderStyle = "solid";
    thumbContainer4.style.borderStyle = "none";
    thumbContainer1.style.borderStyle = "none";
    thumbContainer3.style.borderStyle = "none";

}


function updateLightBox3() {
    img.src = imgArray[2].src;
    lightBoxPic1.style.opacity = "1";
    lightBoxPic2.style.opacity = "1";
    lightBoxPic4.style.opacity = "1";
    thumbNail3.style.opacity = "0.3";
    thumbNail1.style.opacity = "1";
    thumbNail2.style.opacity = "1";
    thumbNail4.style.opacity = "1";
    thumbContainer3.style.borderStyle = "solid";
    thumbContainer4.style.borderStyle = "none";
    thumbContainer1.style.borderStyle = "none";
    thumbContainer2.style.borderStyle = "none";

}


function updateLightBox4() {
    img.src = imgArray[3].src;
    lightBoxPic1.style.opacity = "1";
    lightBoxPic2.style.opacity = "1";
    lightBoxPic3.style.opacity = "1";
    thumbNail4.style.opacity = "0.3";
    thumbNail1.style.opacity = "1";
    thumbNail2.style.opacity = "1";
    thumbNail3.style.opacity = "1";
    thumbContainer4.style.borderStyle = "solid";
    thumbContainer2.style.borderStyle = "none";
    thumbContainer1.style.borderStyle = "none";
    thumbContainer3.style.borderStyle = "none";

}

if (lightBox.style.display === "flex") {
    document.querySelector(".thumbnails").style.pointerEvents = "none";
}





