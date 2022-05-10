const express = require('express'); //Llamamos a express

//Routers
const { usersRouter } = require('./routes/users.routes'); //Importamos users
const { transfersRouter } = require('./routes/transfers.routes');

//utils
const { db } = require('./utils/database');

//Models
const {Transfer} = require('./models/transfers.model')
const {User} = require('./models/users.model')

const app = express(); 

//Enable incoming JSON data
app.use(express.json());

//Endpoints
app.use('/api/v1/users', usersRouter); //call  in users
app.use('/api/v1/transfers', transfersRouter)


db.authenticate() 
  .then(() => console.log('Database connection successfully'))
  .catch(err => console.log(err));

db.sync({
 
}) 
  .then(() => console.log('Sync successfully'))
  .catch(err => console.log(err));

//Model Relations entyti
User.hasMany(Transfer, { foreignKey: 'senderUserId, receiverUserId' });
Transfer.belongsTo(User)

const PORT = '4000';

//spin up server
app.listen(PORT, () => {
  console.log(`Express app running in port: ${PORT}`);
});
