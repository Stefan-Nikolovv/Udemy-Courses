const express = require("express");
const fs = require("fs");
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
const app = express();

app.use(express.json());

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.get("/api/v1/tours/:id", (req, res) => {
  const id = req.params?.id * 1;
  const tour = tours.find((x) => x.id === id);
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});

app.post("/api/v1/tours", (req, res) => {
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
app.patch("/api/v1/tours/:id", (req, res) => {
  const id = req.params?.id * 1;
  const tour = tours.find((x) => x.id === id);
});
const port = 3000;

app.listen(port, () => {
  console.log(`App is running on port:${port}`);
});
