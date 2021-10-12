# Building from Source

## Frontend
1. **Clone the repository**
```bash
git clone git@github.com:TempName-1/rdi-payroll-system.git
```

2. **Checkout to dev branch**
```bash
git checkout dev
```

3. **Change directory to frontend and pull in project dependencies**
```bash
cd frontend
npm install
```

4. **Host the app locally**
```bash
npm start
```

## Backend
1. **Checkout to dev branch**
```bash
git checkout dev
```

2. download MYSQL Workbench 

HOW TO: https://www.youtube.com/watch?v=OM4aZJW_Ojs

	a. Set Up new Connection
		host: "localhost",
 		user: "root",
 		password: "root"

	b. Import nodejs_loginuser.sql to Workbench. (Backend/user_db)

3. **Change directory to backend and pull in project dependencies**
```bash
cd backend
npm install
```

4. **Host the app locally**
```bash
npm start
```

# Adding new feature
1. **Create new branch**
```bash
git checkout -b branch-name
```

2. Push your code
```bash
git add .
git commit -m "description"
git push -u origin branch-name
```

3. Document your changes and create Pull Request

- Note: Make sure that it's in the development branch.

![image](https://user-images.githubusercontent.com/58845052/136660462-0c46db45-9022-48f4-ba36-c9427e0680d3.png)


## Packages
Redux: https://redux.js.org/tutorials/quick-start
<br/>
Styled Components: https://styled-components.com/



