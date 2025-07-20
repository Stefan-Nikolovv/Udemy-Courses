const express = require("express");
const fs = require("fs");
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
const app = express();

app.use(express.json());

const tourRouter = express.Router();
const userRouter = express.Router();

tourRouter.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

tourRouter.get("/:id", (req, res) => {
  const id = req.params?.id * 1;
  const tour = tours.find((x) => x.id === id);
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});

tourRouter.post("/", (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).send("OK");
    }
  );
});
app.use("/api/v/tours", tourRouter);
app.use("/api/v/users", userRouter);
const port = 3000;

app.listen(port, () => {
  console.log(`App is running on port:${port}`);
});
