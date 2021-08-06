/**
   * @swagger
   *  components:
   *    schemas:
   *      Habit:
   *        type: object
   *        properties:
   *          name:
   *            type: string
   *          content:
   *            type: text
   *          time_required:
   *            type: integer
   */
module.exports = (sequelize, DataTypes) => {
  const Habit = sequelize.define('Habit', { // MySQL에는 users 테이블 생성
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time_required: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  Habit.associate = (db) => {
    db.Habit.belongsTo(db.User)
    db.Habit.hasOne(db.RoutinizedHabit, {foreignKey: 'HabitId'})
    db.Habit.belongsToMany(db.Category, {
      through: 'HabitCategory'
    })
  }

  return Habit
}