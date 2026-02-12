import express, { Request, Response } from "express";

export function createServer() {
  const app = express();
  const port = process.env.PORT;

  app.get("/", (req: Request, res: Response) => {
    res.send("<p>Welcome to AI-Powered-Resume-And-Interview-Coach App!!!</p>");
  });

  app.listen(port, () => {
    console.log(
      `AI-Powered-Resume-And-Interview-Coach App Listening on http://localhost:${port}`,
    );
  });
}
