const cron = require("node-cron");
const nodemailer = require("nodemailer");

require("dotenv").config();

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true, // Use secure connection (SSL/TLS)
	service: "gmail",
	auth: {
		user: process.env.USER, // Your email address
		pass: process.env.PASS, // Your email password or app-specific password
	},
});

// Define the email options
const mailOptions = {
	from: process.env.USER, // Sender's email address
	to: process.env.TO, // Receiver's email address
	subject: "Hahahaha",
	text: "This is a scheduled email sent using Node.js and cron jobs.",
};

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
	}
	// {
	// 	scheduled: true,
	// 	timezone: "America/New_York", // Set your timezone, e.g., 'America/New_York'
	// }
);

console.log("Cron job started");
