
const express = require("express");
const connect = require("./src/configs/db")
const userController = require("./src/controllers/user.controller")
const studentController = require("./src/controllers/student.controller");
const batchController = require("./src/controllers/batch.controller");
const evaluationController = require("./src/controllers/evaluation.controller");
const submissionController = require("./src/controllers/submission.controller");

const app = express();

app.use(express.json());
app.use("/user", userController)
app.use("/student", studentController)
app.use("/batch", batchController)
app.use("/evaluation", evaluationController)
app.use("/submission", submissionController);
const start = async () => {
    try {
        await connect();
        app.listen(3000, () => {
            console.log("Listening on port 3000");
        })
    } catch (er) {
        console.log(er.message)
    }
}
start();




