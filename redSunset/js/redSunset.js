/* tab */

openPersonalData(event, "Overview")
function openPersonalData(evt, openPersonalData) {
    var i, section__tabcontent, section__tablinks;
    section__tabcontent = document.getElementsByClassName("section__tabcontent");
    for (i = 0; i < section__tabcontent.length; i++) {
        section__tabcontent[i].style.display = "none";
    }
    section__tablinks = document.getElementsByClassName("section__tablinks");
    for (i = 0; i < section__tablinks.length; i++) {
        section__tablinks[i].className = section__tablinks[i].className.replace(" active", "");
    }

    var div__personalData = document.getElementById(openPersonalData);

    if (div__personalData)
    {
        div__personalData.style.display = "block";
    }

    if (evt)
    {
        evt.currentTarget.className += " active";
    }
}

/* gallery */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}