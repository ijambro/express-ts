import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(
    "Express + TypeScript Server is running 🧑🏻‍💻 and restarting on file changes 👀"
  );
});

app.listen(port, () => {
  console.log(`[server]: 🔥 Server is running at http://localhost:${port}`);
});

export default app;
