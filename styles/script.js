
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const name = document.querySelector('input[placeholder="Full Name"]');
    const email = document.querySelector('input[placeholder="Email Addess"]');
    const phone = document.querySelector('input[placeholder="Mobile Number"]');
    const subject = document.querySelector('input[placeholder="Email Subject"]');
    const message = document.querySelector('textarea');
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 
  
      console.log("Name:", name.value);
      console.log("Email:", email.value);
      console.log("Phone:", phone.value);
      console.log("Subject:", subject.value);
      console.log("Message:", message.value);
  
      alert("Thank you for contacting me, " + name.value + "!");
  
      form.reset();
    });
  });