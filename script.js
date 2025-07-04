// script.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');
  const popupBox = document.getElementById('popupBox');
  const closeButton = document.getElementById('closePopup');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    popupBox.style.display = 'block';
  });

  closeButton.addEventListener('click', function () {
    popupBox.style.display = 'none';
  });
});

