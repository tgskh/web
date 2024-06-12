let contorls = document.querySelectorAll('input');

function update() {
  const suffix = this.dataset.size|| '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

contorls.forEach(input => input.addEventListener('change', update));
contorls.forEach(input => input.addEventListener('mousemove', update));