module.exports = (sequelize, DataTypes) => {
  const ChallengeParticipation = sequelize.define('ChallengeParticipation', {
    achieve_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  ChallengeParticipation.associate = (db) => {
    db.ChallengeParticipation.hasMany(db.DailyAchieveChallenge)
  }

  return ChallengeParticipation
}