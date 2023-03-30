const data=require("./connection");
async function insert(){
  const a=await data();
  a.insertOne({name:"Cristiano",age:38});
}
insert();
