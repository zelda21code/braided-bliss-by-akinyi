document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const service = document.getElementById("service").value;

  alert(`Thank you, ${name}! Your booking for a ${service} on ${date} has been received.`);
});
// Handle review form submission
document.getElementById("review-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("reviewer-name").value.trim();
  const text = document.getElementById("review-text").value.trim();

  if (name && text) {
    const reviewContainer = document.createElement("div");
    reviewContainer.classList.add("review");

    reviewContainer.innerHTML = `<p>"${text}" - ${name}</p>`;

    document.getElementById("live-reviews").prepend(reviewContainer);

    // Reset form fields
    document.getElementById("reviewer-name").value = "";
    document.getElementById("review-text").value = "";
  }
});
const form = document.getElementById("booking-form");
const thankYou = document.getElementById("thank-you");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent normal form submission

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        thankYou.style.display = "block";
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(error => {
      console.error(error);
      alert("An error occurred. Please try again later.");
    });
});

