module.exports = (sequelize, DataTypes) => {
  const RoutinizedHabit = sequelize.define('RoutinizedHabbit', {
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
    },
    achieve_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci'
  })

  RoutinizedHabit.associate = (db) => {
    db.RoutinizedHabit.belongsTo(db.Routine)
    db.RoutinizedHabit.hasMany(db.DailyAchieveHabit)
  }

  return RoutinizedHabit
}