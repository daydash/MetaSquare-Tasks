const cron = require("node-cron");
const nodemailer = require("nodemailer");

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true, // Use secure connection (SSL/TLS)
	service: "gmail",
	auth: {
		user: "@gmail.com", // Your email address
		pass: "", // Your email password or app-specific password
	},
});

// Define the email options
const mailOptions = {
	from: "mailmetametrics@gmail.com", // Sender's email address
	to: "yashbhatnagar88@gmail.com", // Receiver's email address
	subject: "Cron Job Email",
	text: "This is a scheduled email sent using Node.js and cron jobs.",
};

// Schedule the cron job to send the email every day at 8:00 AM
cron.schedule(
	"* * * * * *",
	() => {
		// Send email
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.error("Error sending email:", error);
			} else {
				console.log("Email sent:", info.response);
			}
		});
	},
	{
		scheduled: true,
		timezone: "America/New_York", // Set your timezone, e.g., 'America/New_York'
	}
);

console.log("Cron job started");
