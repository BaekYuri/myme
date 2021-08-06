/**
 * @swagger
 *  components:
 *    schemas:
 *      Challenge:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *          img_addr:
 *            type: string
 *          content:
 *            type: text
 *          start_date:
 *            type: date
 *          period:
 *            type: integer
 *          repeat_cycle:
 *            type: integer
 *            description: 반복 주기입니다. (월~금 매일 이런식 코드로 분류해야 할듯...)
 *          auth_count:
 *            type: integer
 *            description: 하루에 인증해야 하는 횟수입니다.
 */
module.exports = (sequelize, DataTypes) => {
  const Challenge = sequelize.define('Challenge', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    img_addr: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    period: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    repeat_cycle: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    auth_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci'
  })

  Challenge.associate = (db) => {
    db.Challenge.belongsTo(db.User)
    db.Challenge.belongsToMany(db.Category, {
      through: 'ChallengeCategory'
    })
    db.Challenge.hasMany(db.Comment)
    db.Challenge.hasOne(db.ChallengeParticipation, {foreignKey: 'ChallengeId'})
  }

  return Challenge
}