const cron = require("node-cron");
const notifier = require("node-notifier");
const path = require("path");

// Schedule a cron job to send a notification every day at 9:00 AM
cron.schedule(
	"*/4 * * * * *",
	() => {
		// Notification content
		const notificationOptions = {
			title: "Open Chrome",
			message: "Drink water and open chrome",
			icon: path.join(__dirname, "chrome.jpg"),
			wait: true,
		};

		// Send notification
		notifier.notify(notificationOptions);

		console.log("Notification sent:", notificationOptions);

		notifier.on("click", function (notifierObject, options, event) {
			console.log("------ NOTIFIER OBJECT --------");
			console.log(notifierObject);
			console.log("------ OBJECTs --------");
			console.log(options);
			console.log("------ EVENTS --------");
			console.log(event);
		});
	},
	{
		scheduled: true,
		timezone: "America/New_York", // Set your timezone, e.g., 'America/New_York'
	}
);

console.log("Cron job scheduled to send notification every day at 9:00 AM.");
