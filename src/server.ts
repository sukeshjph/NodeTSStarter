import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  // return res.send("Hello, World!");
  console.log('Hello');
});

const start = async (): Promise<void> => {
  try {
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error(error);
  }
};


export default start;