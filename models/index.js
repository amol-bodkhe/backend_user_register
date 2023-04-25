const {Sequelize,DataTypes}=require('sequelize');

const sequelize=new Sequelize('test','root','',{
    host:'localhost',
    logging:false,
    dialect:'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  DB={};
  DB.Sequelize=Sequelize;
  DB.sequelize=sequelize;
  DB.DataTypes=DataTypes;

  DB.user=require('./user')(sequelize,DataTypes);  
  // DB.contact=require('./contact')(sequelize,DataTypes);
  DB.sequelize.sync({force:true});

  console.log("DB.USER >>",DB.user);

  module.exports=DB;