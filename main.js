let posMenu = 0;

var menuplc = document.querySelector(".menuplace");
menuplc.style.left = "-100%"

function toggleMenu() {
    var menuBtn = document.querySelector(".menu-btn");
    
    menuBtn.classList.toggle("close");

    
    if (posMenu == 0) {
        posMenu = 1;
        menuplc.style.left = "0%"
    }else{
        posMenu = 0
        menuplc.style.left = "-100%"
    }
  }
  //Collapsile

  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }

  //

const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', function() {
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      headers.forEach(header => {
        header.nextElementSibling.style.maxHeight = null;
      });
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});




// View an image.
const viewer = new Viewer(document.getElementById('image'), {
  inline: false,
  viewed() {
    viewer.zoomTo(1);
  },
});
// Then, show the image by clicking it, or call `viewer.show()`.

// View a list of images.
// Note: All images within the container will be found by calling `element.querySelectorAll('img')`.
const gallery = new Viewer(document.getElementById('images'));
// Then, show one image by click it, or call `gallery.show()`.


ScrollReveal().reveal('#thing', { delay: 100 });