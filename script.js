const form = document.querySelector(".contact-form");
const statusText = document.querySelector(".form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  statusText.textContent = "Sorğu qeydə alındı. Real saytda bu mesaj WhatsApp və ya e-poçta yönləndiriləcək.";
  form.reset();
});
