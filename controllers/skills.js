const Skill = require('../models/skill') //why is it capitalized? 
//This line pulls info from models/todo. 
//We NEED the double dots '..' because afterward we give the absolute path? 

module.exports = {
    index, 
    //show
}; //this is CREATING (like init) the things that can be pulled from the require above. 

function index(req, res) {
    //read all of the skills 
    const skills = Skill.getAll();
    res.render('skills/index', { skills }) //this is the response to the client 
}

