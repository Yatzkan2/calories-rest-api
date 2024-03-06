//Yair Yatzkan 208959478
//Yarin Akiva 318424660

// controllers/calories.js
//Requiring modules
const Calories = require('../models/calories');
const User = require('../models/users');
const mongoose = require("mongoose");

//Implementing controller functions
const addCalories = (req, res, next) => {
    //res.send('Adding calories');
    const {user_id, year, month, day, description, category, amount} = req.body;
    Calories.create(req.body)
        .then(doc => res.send(doc))
        .catch((err) => {
            console.log("ERROR CREATING CALORY" + err);
            next();
        });
};

const report = (req, res, next) => {
    Calories.find(req.query)
        .then(calories => {
            const report = {
                breakfast: [],
                lunch: [],
                dinner: [],
                other: []
            };

            for(let cat in report) {
                const filtered = calories.filter(cal => cat === cal.category)
                report[cat] = filtered.map(cal => {
                    return {day: cal.day, description: cal.description, amount: cal.amount};
                });
            }
            res.send(report);
        })
        .catch(next);
};

const about = (req, res) => {
    const developers = [
        { firstname: "Yair", lastname: "Yatzkan", id: 208959478, email: "yyatzkan@gmail.com" },
        { firstname: "Yarin", lastname: "akiva", id: 318424660, email: "yarin3db@gmail.com" }
    ];

    res.send(developers);
};

//Exporting controllers
module.exports = { addCalories, report, about };

