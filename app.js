import express from "express";
import "dotenv/config";
import cors from "cors";
import { ExpressPeerServer } from "peer";

const app = express();
const port = process.env.PORT || 3000;
const concurrent_limit = process.env.CONCURRENT_LIMIT || 50;

app.use(cors());

const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at port: ${port}`);
});

const peerServer = ExpressPeerServer(server, {
  path: "/peer",
  concurrent_limit,
});

app.use("/peerjs", peerServer);
