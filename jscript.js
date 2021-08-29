function debounce(func, wait = 60, immediate = true) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  const sliderImgs = document.querySelectorAll('.slide-in');
  function checkSlide(e){
    sliderImgs.forEach(sliderImg => {
      
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImg.height/2;
      //console.log("slideIn at:"+ slideInAt);
  
      const imgBottom = sliderImg.offsetTop + sliderImg.height;
     // console.log("img Bottom:" + imgBottom);
      const isHalfShown = slideInAt > sliderImg.offsetTop;
     // console.log("ishalf shown : " + isHalfShown);
      const isNotScrlPast = window.scrollY < imgBottom ;
      //console.log("isNotScrlPAst: " + isNotScrlPast);
      if(isHalfShown && isNotScrlPast){
        sliderImg.classList.add('active');
      }
      else{
        sliderImg.classList.remove('active');
      }
  
  
  
    });
  }
  
  window.addEventListener('scroll', debounce(checkSlide));
  