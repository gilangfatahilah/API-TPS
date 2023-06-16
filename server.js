const express = require("express");
const cors = require("cors");
const db = require("./app/model/index");

const app = express();

const corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions));
app.use(express.json());

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

db.mongoose.connect(db.url, mongooseConfig)
    .then(() => console.log("database connected"))
    .catch(error => {
        console.log(`database failed to connect ${error.message}`);
        process.exit();
    });

require("./app/routes/dataRoutes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`));