import express from "express";
import cors from "cors";
import control_room from "./routes/Control_Room.js";
// import UserRoute from "./routes/UserRoute.js";
// import CostRoute from "./routes/CostRoute.js";
// import QualityRoute from "./routes/QualityRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(control_room);
// app.use(UserRoute);
// app.use(CostRoute);
// app.use(QualityRoute);

app.listen(5100, () => console.log("Server up and running...in 5100"));
