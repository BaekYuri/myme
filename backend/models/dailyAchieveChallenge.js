/**
 * @swagger
 *  components:
 *    schemas:
 *      DailyAchieveChallenge:
 *        type: object
 *        properties:
 *          date_time:
 *            type: date
 *            description: primaryKey
 *          img_addr:
 *            type: string
 *          content:
 *            type: text
 */

module.exports = (sequelize, DataTypes) => {
  const DailyAchieveChallenge = sequelize.define('DailyAchieveChallenge', {
    date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
      defaultValue: sequelize.literal('now()')
    },
    img_addr: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  DailyAchieveChallenge.associate = (db) => {
    db.DailyAchieveChallenge.belongsTo(db.ChallengeParticipation)
  }

  return DailyAchieveChallenge
}