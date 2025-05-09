document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const name = document.querySelector('input[placeholder="Full Name"]');
  const email = document.querySelector('input[placeholder="Email Addess"]');
  const phone = document.querySelector('input[placeholder="Mobile Number"]');
  const subject = document.querySelector('input[placeholder="Email Subject"]');
  const message = document.querySelector('textarea');
  const submittedData = document.getElementById("submitted-data");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userData = {
      name: name.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      subject: subject.value.trim(),
      message: message.value.trim()
    };

    submittedData.innerHTML = `
      <h3>Thank you, ${userData.name}!</h3>
      <p><strong>Email:</strong> ${userData.email}</p>
      <p><strong>Phone:</strong> ${userData.phone}</p>
      <p><strong>Subject:</strong> ${userData.subject}</p>
      <p><strong>Message:</strong> ${userData.message}</p>
    `;

    alert("Thank you for contacting me, " + userData.name + "!");

    form.reset();
  });
});
