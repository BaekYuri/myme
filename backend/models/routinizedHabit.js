/**
 * @swagger
 *  components:
 *    schemas:
 *      RoutinizedHabit:
 *        description: 루틴에 등록된 습관들
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *          order:
 *            type: integer
 *          assist_content:
 *            type: text
 *            description: 해당 습관을 수행하면서 필요한 것들 메모
 *          assist_link:
 *            type: string
 *            description: 해당 습관을 수행하면서 필요한 자료의 링크 Ex) 명상하기 - 명상 가이드 영상 링크
 *          RoutineId:
 *            type: integer
 *          HabitId:
 *            type: integer
 */
module.exports = (sequelize, DataTypes) => {
  const RoutinizedHabit = sequelize.define('RoutinizedHabit', {
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    assist_content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    assist_link: {
      type: DataTypes.STRING(100),
      allowNull: true,
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci'
  })

  RoutinizedHabit.associate = (db) => {
    db.RoutinizedHabit.belongsTo(db.Routine)
    db.RoutinizedHabit.belongsTo(db.Habit)
    db.RoutinizedHabit.hasMany(db.DailyAchieveHabit)
  }

  return RoutinizedHabit
}