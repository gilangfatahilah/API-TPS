module.exports = app => {
    const data = require("../controllers/controller");
    const route = require("express").Router();

    route.get("/", data.getAll);
    route.get("/:id", data.getById);
    route.post("/", data.create);
    route.put("/:id", data.update);
    route.delete("/:id", data.delete);

    app.use("/data", route);

}