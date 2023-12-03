
document.addEventListener('DOMContentLoaded', function () {
  var navCheck = document.getElementById('nav-check');
  var navLinks = document.querySelector('.nav-links');

  navLinks.addEventListener('click', function (e) {
    if (e.target.classList.contains('dropdown-toggle')) {
      var dropdownContent = e.target.nextElementSibling;
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
    }
  });

  navCheck.addEventListener('change', function () {
    if (navCheck.checked) {
      navLinks.style.height = 'calc(100vh - 50px)';
      navLinks.style.overflowY = 'auto';
    } else {
      navLinks.style.height = '0px';
      navLinks.style.overflowY = 'hidden';
    }
  });
});