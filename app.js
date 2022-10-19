const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const cors =require('cors');

const expenseRoutes = require('./routes/expenseopen');

const sequelize = require('./utils/database');

const dataRoutes = require('./models/expensedata');

app.use(bodyParser.json())

app.use(cors())
app.use(expenseRoutes);

sequelize
//  .sync()
 .sync({force:true})
.then(results => {
    app.listen(4000);
})
.catch(err => {
    console.log(err);
})