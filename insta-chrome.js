var imagesToGet = 403; //minimum number of images, might have to play with this more

var loadmore = setInterval(function(){
    document.getElementsByClassName("PhotoGridMoreButton")[0].click();
    var images = document.getElementsByClassName("iImage");
    if(images.length > imagesToGet){
        window.clearInterval(loadmore);
        var newimages = [];
        for(var i = 0; i<images.length; i++) newimages[i] = /https.*.jpg/.exec(images[i].style.cssText)[0];
        var json = JSON.stringify(newimages);
        var myWindow = window.open();
        myWindow.document.write(json); 
        /*
        uncomment for displaying all images on a seperate image
        for(var i = 0; i<newimages.length; i++) myWindow.document.write("<img src = " + newimages[i] +"> <br>");
        */ 
    }
}, 1000);

