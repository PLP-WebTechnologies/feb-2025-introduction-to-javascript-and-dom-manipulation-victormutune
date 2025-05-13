function changeText() {
  const text = document.getElementById('dynamic-text');
  text.textContent = "🎉 The text has been updated!";
}

function changeStyle() {
  const title = document.getElementById('main-title');
  title.style.color = "crimson";
  title.style.fontSize = "2.5rem";
}

function addElement() {
  const container = document.getElementById('container');
  const newDiv = document.createElement('div');
  newDiv.textContent = "🚀 New element added!";
  newDiv.className = "new-box";
  container.appendChild(newDiv);
}

function removeElement() {
  const container = document.getElementById('container');
  if (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
}
