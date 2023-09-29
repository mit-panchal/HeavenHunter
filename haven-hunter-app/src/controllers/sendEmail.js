// sendEmail.js
import nodemailer from "nodemailer";

// Create a Nodemailer transporter using your email service credentials
const transporter = nodemailer.createTransport({
  service: "Gmail", // Update with your email service (e.g., 'Gmail', 'Yahoo')
  auth: {
    user: "mitpanchal1512@gmail.com", // Your email address
    pass: "zjlt yfav lwuo cyyt", // Your email password
  },
});

// Function to send the email
const sendEmail = async (fromEmail, toEmail, firstName, lastName, message) => {
  // Compose the email
  const mailOptions = {
    from: fromEmail, // Sender address (your email address)
    to: toEmail, // Recipient address (user-entered email address)
    subject: "New Contact Form Submission",
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${toEmail}
      Message: ${message}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    // Successful email submission
    // You can add your success message or redirection logic here
  } catch (error) {
    // Handle email sending errors
    console.error("Error sending email:", error);
    // You can add error handling logic here
  }
};

export default sendEmail;
