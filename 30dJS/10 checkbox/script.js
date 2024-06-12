const checkBoxes = document.querySelectorAll('input');
let lastCheked;

function handleCheck (e) {
  const label = e.target.nextElementSibling;
  label.classList.toggle('checked');
  let inside = false;

  if(e.shiftKey && this.checked) {
    checkBoxes.forEach(box => {
      console.log(box);
      if (box === this || box === lastCheked) {
        inside = !inside;
      };

      if (inside) {
        box.checked = true;
      }
    })
  }

  lastCheked = this;
}

checkBoxes.forEach(box => {
  box.addEventListener('click', handleCheck);
});


