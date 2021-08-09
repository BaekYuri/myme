/**
   * @swagger
   *  components:
   *    schemas:
   *      Habit:
   *        type: object
   *        properties:
   *          id:
   *            type: integer
   *          name:
   *            type: string
   *          icon_src:
   *            type: string
   *          content:
   *            type: text
   *          time_required:
   *            type: integer
   *          UserId:
   *            type: integer
   *          CategoryId:
   *            type: integer
   */
module.exports = (sequelize, DataTypes) => {
  const Habit = sequelize.define('Habit', { // MySQL에는 users 테이블 생성
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    icon_src: {
      type: DataTypes.STRING(50),
      allowNull: true,
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
    db.Habit.hasMany(db.RoutinizedHabit)
    db.Habit.belongsToMany(db.Category, {
      through: 'HabitCategory'
    })
  }

  return Habit
}