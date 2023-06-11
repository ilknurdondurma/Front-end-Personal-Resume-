/* active etme fonksiyonu navbar */
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navbarLinks = document.querySelectorAll('.navbar-nav a');
  
    function changeActiveLink() {
      let currentSectionIndex = 0;
      let isSectionFound = false;
  
      sections.forEach(function(section, index) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.pageYOffset;
  
        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          currentSectionIndex = index;
          isSectionFound = true;
        }
      });
  
      if (isSectionFound) {
        navbarLinks.forEach(function(link) {
          link.classList.remove('active');
        });
  
        navbarLinks[currentSectionIndex].classList.add('active');
      }
  
// İletişim bağlantısını kontrol et
      const contactLink = document.querySelector('.navbar-nav .nav-link[href="#contact"]');
      const contactSection = document.querySelector('#contact');
  
      if (contactLink && contactSection) {
        const sectionTop = contactSection.offsetTop;
        const sectionHeight = contactSection.clientHeight;
        const scrollPosition = window.pageYOffset;
  
        if (
          scrollPosition >= sectionTop - 50 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          contactLink.classList.add('active');
        } else {
          contactLink.classList.remove('active');
        }
      }
  
// Dropdown menüsündeki bağlantıları kontrol et
      const dropdownLinks = document.querySelectorAll('.navbar-nav .dropdown-menu .dropdown-item');
  
      dropdownLinks.forEach(function(link) {
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
  
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          const scrollPosition = window.pageYOffset;
  
          if (
            scrollPosition >= sectionTop - 1 &&
            scrollPosition < sectionTop + sectionHeight - 1
          ) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    }
  
    window.addEventListener('scroll', changeActiveLink);
  });
  

/*collapsı kapatma fonksiyonu*/

  var navbarToggler = document.querySelector('.navbar-toggler');
        var navbarCollapse = document.querySelector('.navbar-collapse');

        document.addEventListener('click', function(event) {
            var isClickInsideNavbar = navbarCollapse.contains(event.target);
            var isClickInsideNavbarToggler = navbarToggler.contains(event.target);

            if (!isClickInsideNavbar && !isClickInsideNavbarToggler) {
                navbarCollapse.classList.remove('show');
            }
        });

/*harfleri yazdırma animasyonu*/

        function typeWriter(element, text, delay) {
          var i = 0;
          var timer = setInterval(function() {
              if (i < text.length) {
                  element.innerHTML += text.charAt(i);
                  i++;
              } else {
                  clearInterval(timer);
              }
          }, delay);
      }

      document.addEventListener('DOMContentLoaded', function() {
          var elements = document.getElementsByClassName('typing-animation');
          for (var i = 0; i < elements.length; i++) {
              var text = elements[i].innerHTML;
              elements[i].innerHTML = '';
              typeWriter(elements[i], text, 100);
          }
      });



/* projeleri active ve gösterme etme fonksiyonu */
function toggleBox(boxNumber) {
  var boxes = document.getElementsByClassName("card");

  for (var i = 0; i < boxes.length; i++) {
    if (i === boxNumber - 1) {
      boxes[i].classList.add("activeProject");
      var linkHolder = boxes[i].querySelector(".card-link");

     
      if (linkHolder.classList.contains("d-none")) {
        linkHolder.classList.remove("d-none");
        linkHolder.classList.add("d-block");
      }
    }
    
    else {
      boxes[i].classList.remove("activeProject");
      var linkHolder = boxes[i].querySelector(".card-link");

      if (linkHolder.classList.contains("d-block")) {
        linkHolder.classList.remove("d-block");
        linkHolder.classList.add("d-none");
      }
    }
  }
}

/* sayfa ilk acıldıgında 3cu projeyi aktif classına alma fonsksiyonu */
window.addEventListener('DOMContentLoaded', function() {
  var boxes = document.getElementsByClassName("card");
  var targetBox = boxes[2];
  var imageHolder = targetBox.querySelector(".testimonial_image_holder");
  var linkHolder = targetBox.querySelector(".card-link");

  
  targetBox.classList.add("activeProject");
  linkHolder.classList.remove("d-none");
  linkHolder.classList.add("d-block");
});


/* form validation */

window.addEventListener('DOMContentLoaded', function() {
  const nameInput = document.getElementById("exampleFormControlInput1");
  const emailInput = document.getElementById("exampleFormControlInput2");
  const messageTextarea = document.getElementById("exampleFormControlTextarea1");
  const submitButton = document.querySelector(".btn-outline-success");
  
  submitButton.addEventListener('click', function() {
    let hasError = false;
    
    if (nameInput.value.trim() === "") {
      nameInput.style.border = "2px solid red";
      hasError = true;
    } else {
      nameInput.style.border = "";
    }
    
    if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
      emailInput.style.border = "2px solid red";
      hasError = true;
    } else {
      emailInput.style.border = "";
    }
    
    if (hasError) {
      event.preventDefault();
    } else {
      nameInput.value = "";
      emailInput.value = "";
      messageTextarea.value = "";
    }
  });
});

function isValidEmail(email) {
  // Basit bir e-posta doğrulama işlemi
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}
