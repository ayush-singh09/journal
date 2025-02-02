import { createServer } from "http";
import { connectDB } from "./src/db/connection.js";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { PORT } from "./src/utils/constants.js";

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`${socket.id} just joined`);

  socket.on("message", ({ number }) => {
    console.log(`${socket.id} sent ${number}`);
    
  })

});

connectDB();

app.get("/", (req, res) => {
  console.log("Request at Home");

  res.send(`<h1>Welcome to the Home Page</h1>`);
});

server.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
