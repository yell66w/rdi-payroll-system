module.exports = (sequelize, Sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "employee", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      middle_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birth_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
        unique: {
          args: true,
          msg: "Email address already in use!",
        },
      },
      contact_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      employee_type: {
        type: DataTypes.ENUM({
          values: ["REGULAR", "CONTRACTUAL"], //TODO - ADD MORE TYPES
        }),
        defaultValue: "REGULAR",
        allowNull: false,
      },
      date_hired: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      time_shift_from: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      time_shift_to: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscrored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Employee;
};
