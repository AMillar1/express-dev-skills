const skills = [
    {id: 0, skill: 'JavaScript', done: true},
    {id: 1, skill: 'Express', done: false},
    {id: 2, skill: 'Foo', done: true},
    {id: 3, skill: 'Foo2', done: true},
    {id: 4, skill: 'Foo3', done: true},
];

module.exports = {
    getAll, 
    getOne, 
    create,
    deleteOne,
} //define the exports from this module 

function getAll() {
    return skills; 
} //create a function for returning the entire array skills

function getOne (id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(input) {
    skills.push(input)
}