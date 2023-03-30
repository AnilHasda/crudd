const data=require("./connection");
async function update(){
  const a=await data();
  a.updateOne({name:"anil"},{$set:{"name:"ronaldo"}});
}
update();