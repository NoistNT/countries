const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define(
    'Activity',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      difficulty: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        allowNull: false,
        validate: {
          isIn: [['1', '2', '3', '4', '5']]
        }
      },
      duration: {
        type: DataTypes.STRING
      },
      season: {
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
        allowNull: false,
        validate: {
          isIn: [['Summer', 'Autumn', 'Winter', 'Spring']]
        }
      }
    },
    { timestamps: false }
  )
}
