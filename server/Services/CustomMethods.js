const { Workout, Sequelize } = require('../models');

const getWorkoutsCategory = async () => {
    return await Workout.findAll({
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('category')), 'category']
        ]
    });
};

module.exports = {
    getWorkoutsCategory,
};
