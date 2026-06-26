const form = document.querySelector(".contact-form");
const statusText = document.querySelector(".form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  statusText.textContent = "Sor\u011fu qey\u0259 al\u0131nd\u0131. Real saytda bu mesaj WhatsApp v\u0259 ya e-po\u00e7ta y\u00f6nl\u0259ndiril\u0259c\u0259k.";
  form.reset();
});
