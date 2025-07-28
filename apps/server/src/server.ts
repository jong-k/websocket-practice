import { WebSocketServer, WebSocket } from "ws";

const PORT = 8080;

const wss = new WebSocketServer({ port: PORT });

wss.on("connection", (ws: WebSocket) => {
  console.log("Client connected");

  ws.on("message", (data: Buffer) => {
    const message = data.toString();
    console.log("Received:", message);

    ws.send(`Echo: ${message}`);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });

  ws.send("Welcome to WebSocket server!");
});

console.log(`WebSocket server running on ws://localhost:${PORT}`);
