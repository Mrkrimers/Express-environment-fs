const express = require(`express`);
const { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment } = require(`./service`)
const bodyParser = require(`body-parser`);

const app = express();
app.use(bodyParser.json())

app.get(`/`, (request, response) => {
    try {
        const data = getAllEnvironment();
        response.status(200).send(data);
    } catch (er) { response.status(404).send(er.message) }

})

app.get(`/:id`, (request, response) => {
    try {
        const { id } = request.params;
        const data = getEnvironmentById(id);

        response.status(200).send(data);
    } catch (er) { response.status(404).send(er.message) }
})

app.post(`/`, (request, response) => {
    try {
        const { label, category, priority } = request.body;
        const data = createEnvironment(label, category, priority);

        response.status(201).send(data);
    } catch (er) { response.status(404).send(er.message) }
})

app.put(`/:id`, (request, response) => {
    try {
        const { id } = request.params;
        const { label, category, priority } = request.body;
        const data = updateEnvironment(id, label, category, priority);

        response.status(200).send(data);
    } catch (er) { response.status(404).send(er.message) }
})

app.delete(`/:id`, (request, response) => {
    try {
        const { id } = request.params;
        const data = deleteEnvironment(id);

        response.status(200).send(data);
    } catch (er) { response.status(404).send(er.message) }
})

app.listen(3000, () => {
    console.log(`server is running`);
})