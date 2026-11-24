let count = 0;

const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");

function render() {
  countEl.textContent = count;
}

incrementBtn.addEventListener("click", () => {
  count++;
  render();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});
