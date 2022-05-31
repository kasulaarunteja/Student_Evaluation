

const post = (model) => async (req, res) => {
    try {
        const item = await model.create(req.body);
        return res.status(201).send(item);
    } catch (er) {
        return res.status(500).send(er.message);
    }
}

const getOne = (model) => async (req, res) => {
    try {
        const item = await model.findById(req.params.id).lean().exec();
        return res.send(item);
    } catch (er) {
        return res.status(500).send(er.message)
    }
}
const getAll = (model) => async (req, res) => {
    try {
        const items = await model.find().lean().exec();
        return res.send(items);
    } catch (er) {
        return res.status(500).send(er.message)
    }
}
const patch = (model) => async (req, res) => {
    try {
        const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
        return res.send(item);
    } catch (er) {
        return res.status(500).send(er.message)
    }
}
const Delete = (model) => async (req, res) => {
    try {
        const del = await model.findByIdAndDelete(req.params.id);
        return res.send(del);

    } catch (error) {
        return res.status(500).send(er.message);

    }
}
module.exports = (model) => {
    return {
        post: post(model),
        getAll: getAll(model),
        getOne: getOne(model),
        patch: patch(model),
        delete: Delete(model)

    }
}