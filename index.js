const express = require(`express`);
const { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment } = require(`./service`)
const bodyParser = require(`body-parser`);

const app = express();
app.use(bodyParser.json())

app.get(`/`, (request, response) => {
    const data = getAllEnvironment();
    
    response.status(200).send(data);
})

app.get(`/:id`, (request, response) => {
    const { id } = request.params;
    const data = getEnvironmentById(id);

    response.status(200).send(data);
})

app.post(`/`, (request, response) => {
    const { label, category, priority } = request.body;

    const data = createEnvironment(label, category, priority);
    response.status(201).send(data);
})

app.put(`/:id`, (request, response) => {
    const { id } = request.params;
    const { label, category, priority } = request.body;
    const data = updateEnvironment(id, label, category, priority);

    response.status(200).send(data);
})

app.delete(`/:id`, (request, response) => {
    const { id } = request.params;
    const data = deleteEnvironment(id);

    response.status(200).send(data);
})

app.listen(3000, () => {
    console.log(`server is running`);
})