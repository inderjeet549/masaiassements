let vanillaUpdateCount = 0;
const vanillaButton = document.getElementById('vanillaButton');
const currentTitle = document.getElementById('currentTitle');
const vanillaUpdateCountElement = document.getElementById('vanillaUpdateCount');
vanillaButton.addEventListener('click', () => {
  document.title = 'Vanilla JS Title Changed';
  currentTitle.textContent = 'Current Title: Vanilla JS Title Changed';
  vanillaUpdateCount += 1;
  vanillaUpdateCountElement.textContent = vanillaUpdateCount;
});