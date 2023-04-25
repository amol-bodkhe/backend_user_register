// const { DataTypes }=require('sequelize');
// const DB=require('./index')

module.exports=(db,DataTypes)=>{
   const user= db.define('user',
{
firstName:{
    type:DataTypes.STRING,
    allowNull:false
},
lastName:{
    type:DataTypes.STRING,
    allowNull:false
    //allowNull is default true,
    // defaultValue:'bodkhe'
},
email:{
    type:DataTypes.STRING,
    defaultValue:'amolbodkhe487@gmail.com'
},
phone:{
    type:DataTypes.STRING,
    defaultValue:'93XXXXXX24'
}
},
{
    // Other model options go here
tableName:"Users",
timestamps:false,
});
return user;
}
