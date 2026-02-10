const nameInput = document.getElementById("nameInput");
const rollInput = document.getElementById("rollInput");
const bioInput = document.getElementById("bioInput");

const namePreview = document.getElementById("namePreview");
const rollPreview = document.getElementById("rollPreview");
const bioPreview = document.getElementById("bioPreview");

nameInput.addEventListener("input", () => {
  namePreview.textContent = nameInput.value || "Your Name";
});

rollInput.addEventListener("input", () => {
  rollPreview.textContent = rollInput.value || "Roll Number";
});

bioInput.addEventListener("input", () => {
  bioPreview.textContent = bioInput.value || "Your bio will appear here";
});
