module.exports = (sequelize, DataTypes) => {
  const DailyAchieveHabit = sequelize.define('DailyAchieveHabit', {
    date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
      defaultValue: sequelize.literal('now()')
    },
    authorized: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  DailyAchieveHabit.associate = (db) => {
    db.DailyAchieveHabit.belongsTo(db.RoutinizedHabit)
  }

  return DailyAchieveHabit
}