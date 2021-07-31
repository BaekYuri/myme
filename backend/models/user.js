/**
   * @swagger
   *  components:
   *    schemas:
   *      User:
   *        type: object
   *        properties:
   *          name:
   *            type: string
   *          email:
   *            type: string
   *            format: email
   *            description: Email for the user, needs to be unique.
   *          nickname:
   *            type: string
   *            description: Nickname for the user, needs to be unique.
   *          password:
   *            type: string
   *            format: password
   *          gender:
   *            type: string
   *          age:
   *            type: integer
   *          address:
   *            type: string
   *          phone_number:
   *            type: string
   */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // MySQL에는 users 테이블 생성
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(20),
        allowNull: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(100), // 비밀번호 암호화 시 길어진다~
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING(5),
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      phone_number: {
        type: DataTypes.STRING(15),
        allowNull: true,
      }
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  User.associate = (db) => {
    db.User.hasMany(db.Routine)
    db.User.hasMany(db.Challenge)
  }

  return User
}