/**
 * @swagger
 *  components:
 *    schemas:
 *      Category:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *          name:
 *            type: string
 */
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', { // Categories
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  Category.associate = (db) => {
    db.Category.belongsToMany(db.Challenge, {
      through: 'ChallengeCategory'
    })
    db.Category.belongsToMany(db.Habit, {
      through: 'HabitCategory'
    })
  }

  return Category
}