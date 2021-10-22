const config = require("../config/config.js");
const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize(
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS,
  {
    host: config.db.DB_HOST,
    dialect: config.db.dialect,
    poll: {
      max: config.db.pool.max,
      min: config.db.pool.min,
      acquire: config.db.pool.acquire,
      idle: config.db.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

/**
 * Models
 */

db.user = require("./user.model.js")(sequelize, Sequelize, DataTypes);
db.employee = require("./employee.model.js")(sequelize, Sequelize, DataTypes);
db.company = require("./company.model.js")(sequelize, Sequelize, DataTypes);

db.department = require("./department.model.js")(
  sequelize,
  Sequelize,
  DataTypes
);
db.position = require("./position.model.js")(sequelize, Sequelize, DataTypes);

/**
 * Relationships
 */

//OneToMany Relationship (One Company-> Many Employees)
db.employee.belongsTo(db.company, {
  foreignKey: { name: "company_id", allowNull: false },

  foreignKeyConstraint: true,
});
db.company.hasMany(db.employee, { as: "employees", foreignKey: "company_id" });

//OneToMany Relationship (One Department-> Many Employees)
db.employee.belongsTo(db.department, {
  foreignKey: { name: "department_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.department.hasMany(db.employee, {
  as: "employees",
  foreignKey: "company_id",
});

//OneToMany Relationship (One Position -> Many Employees)
db.employee.belongsTo(db.position, {
  foreignKey: { name: "position_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.position.hasMany(db.employee, {
  as: "employees",
  foreignKey: "position_id",
});

//OneToMany (One company  ---> Many departments)
db.department.belongsTo(db.company, {
  foreignKey: { name: "company_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.company.hasMany(db.department, {
  as: "departments",
  foreignKey: "company_id",
});

//OneToMany (One department  ---> Many position)
db.position.belongsTo(db.department, {
  foreignKey: { name: "department_id", allowNull: false },
  foreignKeyConstraint: true,
});
db.department.hasMany(db.position, {
  as: "positions",
  foreignKey: "department_id",
});

module.exports = db;
