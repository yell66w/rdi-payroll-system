1. Install mo mysql
2. Create ka ng database, yung name dapat rdi_payroll_system
3. CREATE database rdi_payroll_system;
4. Punta ka sa backend na folder tapos type "npm install" walang quotations
5. Create ka ng .env file dito sa backend folder
6. Ilagay mo to sa .env (yung no.7)
7. DB_HOST=127.0.0.1
   DB_USER=root
   DB_PASS=root
   DB_NAME=rdi_payroll_system
   DB_PORT=3306
   PORT=8000
   NODE_ENV=development
8. Wag mo kalimutan iedit yung username,password,host ng mysql mo (IMPORTANT! kung nagkakaroon ka ng access denied, gawa ka nalang ng new account sa mysql)
10. npm run dev
11. npx sequelize-cli db:seed:all (i run mo tong command para magkalaman yung database)

**PANO I-TEST YUNG API?**

1. Install ka postman
2. Create ka ng new HTTP request
3. nasa localhost:8000/ yung mga api
4. tignan mo sa routes directory yung mga endpoints


------------------------------------------------------

**PANO YUNG PROCESS NG PAG CONTRIBUTE?**
1. Gawa ka ng model (e.g. employee.model.js)
2. Gawa ka ng controller (e.g. employee.controller.js)
3. Gawa ka ng route (e.g. employee.route.js)

**PANO MAGCREATE NG TABLE/MODEL/ENTITY SA DATABASE?**
1. Punta ka sa /models 
2. Nandito yung documentation sa pag gawa ng model https://sequelize.org/master/manual/model-basics.html
3. Pwede mo naman din icopy paste nalang yung nagawa kong model (ichange mo lang yung name)
4. Example gagawa ka ng employee table, icopy-paste mo yung user.model.js, gawin mong employee.model.js
5. Tapos sa loob ng file, ichange mo yung
```js
const User = sequelize.define(
    "user", // Model name
    {
         return User;
    }
```
to
```js
const Employee = sequelize.define(
    "employee", // Model name
    {
      return Employee
    }
```
(Tip: sa vscode pwede mo idouble click yung user tapos ctrl+shift+l)
6. Ilagay mo nalang sa loob yung fields ng table based dun sa database design
7. After mo makagawa ng model, punta ka sa /models/index.js
8. Iregister mo dyan yung model mo sa baba
9. E.g. db.employee = require("./employee.model.js")(sequelize, Sequelize, DataTypes);

**PANO MAGLAGAY NG CONTROLLER**
-- Controller yung responsible sa pag query sa database
-- Ito yung mga function talaga na gagamitin natin
1. Punta ka sa /controller
2. Nandito yung documentation sa pag query https://sequelize.org/master/manual/model-querying-basics.html
3. Ito pa https://sequelize.org/master/manual/model-querying-finders.html
4. Sundin mo nalang yung examples ko
5. Yung name ng controller dapat same sa name ng model or in line sa gusto mong gawin, e.g. employee.controller.js 

**PANO MAGLAGAY NG ROUTES**
-- Ito yung ilalagay niyo sa postman
-- Ito yung gagamitin ng frontend para maaccess yung api natin
-- Ito yung mga endpoints, yung URL
1. Punta ka sa /routes
2. Copy paste mo lang yung mga sample ko diyan, tas ibahin mo nalang yung name e.g. employee.routes.js
3. Ibahin mo din yung controller na inimport based sa kung anong controller gagamitin mo para sa route na yan
4. Ito documentation sa routing https://expressjs.com/en/guide/routing.html
5. Make sure na ifofollow mo to sa REST API https://usercontent.one/wp/www.kennethlange.com/wp-content/uploads/2018/10/task_api.png?media=1631958963
6. After mo magcreate ng route, iregister mo siya
7. Punta ka lang sa src/index.js tapos iimport mo sa loob ng db.sequelize.sync().then yung route mo
8. E.g. require("./routes/employee.routes")(app);


------------------------------------------------------------
**PANO MMAGLAGAY NG MGA SEEDS?**
-- Yung seeds ay yung mga iniinsert natin kaagad sa database para may laman na siya agad.
1. Punta ka sa /seeders
2. Nandito yung documentation sa pag gawa ng seeds https://sequelize.org/master/manual/migrations.html
3. Nasa Creating the first Seed (ctrl+f mo nalang haha)




