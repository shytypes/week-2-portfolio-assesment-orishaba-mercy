document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const name = document.querySelector('input[placeholder="Full Name"]');
  const email = document.querySelector('input[placeholder="Email Addess"]');
  const phone = document.querySelector('input[placeholder="Mobile Number"]');
  const subject = document.querySelector('input[placeholder="Email Subject"]');
  const message = document.querySelector('textarea');

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userData = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value
    };

    console.log("Name:", userData.name);
    console.log("Email:", userData.email);
    console.log("Phone:", userData.phone);
    console.log("Subject:", userData.subject);
    console.log("Message:", userData.message);

    alert("Thank you for contacting me, " + userData.name + "!");

    form.reset();
  });
});
