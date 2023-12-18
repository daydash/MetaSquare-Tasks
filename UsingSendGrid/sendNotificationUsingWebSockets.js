const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cron = require("node-cron");
const cors = require("cors");

const app = express();
app.use(
	cors({
		origin: "*",
	})
);
const server = http.createServer(app);
const io = socketIO(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});

// Enable CORS for all routes

// Serve static files
app.use(express.static("public"));

// Schedule a cron job to send a notification every 3 seconds
cron.schedule(
	"*/3 * * * * *",
	() => {
		// Notify all connected clients
		io.emit("notification", "Notification from server!");
		console.log("Notification sent to all clients.");
	},
	{
		scheduled: true,
		timezone: "Asia/Calcutta",
	}
);

app.get("/", (req, res) => {
	res.send("HOME ROUTE");
});

server.listen(5000, () => {
	console.log("Server listening on PORT 5000");
});

// Socket.IO connection handling
io.on("connection", (socket) => {
	console.log("Client connected");

	// Handle disconnect
	socket.on("disconnect", () => {
		console.log("Client disconnected");
	});
});
