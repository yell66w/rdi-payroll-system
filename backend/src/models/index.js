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

db.user = require("./user.model.js")(sequelize, Sequelize, DataTypes);
db.employee = require("./employee.model.js")(sequelize, Sequelize, DataTypes);
db.company = require("./company.model.js")(sequelize, Sequelize, DataTypes);
db.department = require("./department.model.js")(sequelize, Sequelize, DataTypes);
db.position = require("./position.model.js")(sequelize, Sequelize, DataTypes);

//ASSOCIATION (One company  ---> Many departments)
db.department.belongsTo(db.company,{
  foreignKey:{name:"company_id", allowNull:false},
  foreignKeyConstraint: true,
});
db.company.hasMany(db.department, {as: "department", foreignKey: "company_id"});


//ASSOCIATION (One department  ---> Many position)
db.position.belongsTo(db.department,{
  foreignKey:{name:"department_id", allowNull:false},
  foreignKeyConstraint: true,
});
db.company.hasMany(db.position, {as: "position", foreignKey: "department_id"});

module.exports = db;
