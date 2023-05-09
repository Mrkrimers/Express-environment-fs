const fs = require(`fs`);

const path = `./storage/environment.json`

function getAllEnvironment() {
    const array = JSON.parse(fs.readFileSync(path));
    return array;
}

function getEnvironmentById(id) {
    const array = JSON.parse(fs.readFileSync(path));

    const findId = array.find(el => el.id == id);

    return findId;
}

function createEnvironment(label, category, priority) {
    const arr = JSON.parse(fs.readFileSync(path));
    arr.push({
        id: label.toLowerCase(),
        label: label,
        category: category,
        priority: priority
    })

    fs.writeFileSync(path, JSON.stringify(arr))
    return arr;
}

function updateEnvironment(id, label, category, priority) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter(el => el.id != id);
    if (filtered.length == arr.length) { return `you ID not found` }
    filtered.push({
        id: id,
        label: label,
        category: category,
        priority: priority
    })

    fs.writeFileSync(path, JSON.stringify(filtered))
    return filtered;
}

function deleteEnvironment(id) {
    const arr = JSON.parse(fs.readFileSync(path));

    const deleted = arr.filter(el => el.id != id);
    if (arr.length == deleted.length) return `your ID not found`

    fs.writeFileSync(path, JSON.stringify(deleted));
    
    return deleted;
}


module.exports = { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment }