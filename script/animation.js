var myslides=document.getElementsByClassName('myslides');

var slide_payonline=document.getElementsByClassName('list-slide');
var modal=document.querySelector('.modal');
var addressbtn=document.querySelector('.header-address');

// tu dong chuyen slide

slideshow(myslides[0]);
// payonline
slideshow(slide_payonline[0])
// chuyen trnag thuong hieu
slideshow(slide_payonline[1])
// chuoi moi deal khung
slideshow(slide_payonline[2])
   
    
    


// hien box khi click vao header-address
addressbtn.addEventListener('click',function(){
        modal.classList.add('open');
})




function slideshow(listslide){
    var numbermargin=0;
    var widthslide=1200;
    var max=listslide.offsetWidth-widthslide;
    var nextbtn=listslide.parentElement.getElementsByClassName('next');
    var prevbtn=listslide.parentElement.getElementsByClassName('prev');
    nextbtn[0].addEventListener("click",function(){
        nextslide();
    });
    
    prevbtn[0].addEventListener("click",function(){
        prevslide();
    });
    setInterval(function(){
        nextslide();}
    ,5000);
    
    
    function prevslide(){
       if(numbermargin==0)
            numbermargin=max;
        else
            numbermargin-=widthslide;
        listslide.style.marginLeft='-'+numbermargin + 'px';
    }
    
    
    function nextslide(){
        if(numbermargin<max){
            numbermargin+=widthslide;
        }
        else
            numbermargin=0;
        listslide.style.marginLeft='-'+numbermargin+'px';
    }
}



