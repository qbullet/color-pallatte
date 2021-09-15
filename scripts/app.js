const code = document.getElementById('code')
const color = document.getElementById('color')
const generateButton = document.getElementById('generate-button')

const colorGen = () => {
  const letters = "0123456789abcdef";
  let newColor = '#'
  for (let i = 0; i < 6; i++) {
    newColor += letters[Math.floor(Math.random() * 16)];
  }

  code.innerHTML = newColor
  color.style.backgroundColor = newColor
}

generateButton.addEventListener("click", colorGen);
