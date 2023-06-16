const db = require("../model");
const data = db.data


exports.create = (req, res) => {
    data.create(req.body)
        .then(() => res.send({ message: "Data Successfully Created !" }))
        .catch(error => res.status(500).send({ message: error.message }));
}

exports.getAll = (req, res) => {
    data.find()
        .then(data => res.send(data))
        .catch(error => res.status(500).send({ message: error.message }));
}

exports.getById = (req, res) => {
    const id = req.params.id;

    data.findById(id)
        .then(data => res.send(data))
        .catch(error => res.status(500).send({ message: error.message }));
}

exports.update = (req, res) => {
    const id = req.params.id;
    data.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Can't Update Data !" })
            }
            res.send({ message: "Data Successfully Updated !" })
        })
        .catch(error => res.status(500).send({ message: error.message }));
}

exports.delete = (req, res) => {
    const id = req.params.id;

    data.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Can't Delete Data !" })
            }
            res.send({ message: "Data Successfully Deleted !" })
        })
        .catch(error => res.status(500).send({ message: error.message }));
}