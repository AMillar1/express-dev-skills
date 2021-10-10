const Skill = require('../models/skill') //why is it capitalized? 
//This line pulls info from models/todo. 
//We NEED the double dots '..' because afterward we give the absolute path? 

module.exports = {
    index, 
    show,
    add: addSkill,
    create,
    delete: deleteSkill,

}; //this is CREATING (like init) the things that can be pulled from the require above. 

function index(req, res) {
    //read all of the skills 
    const skills = Skill.getAll();
    res.render('skills/index', { skills }) //this is the response to the client 
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}

function addSkill(req, res) {
    res.render('skills/add');
}

function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.simplyanythingwewant);
    res.redirect('/skills');
}