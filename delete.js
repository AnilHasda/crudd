const data=require("./connection");
async function delete(){
  let a=await data();
  a.deleteOne({name:"anil"});
}
delete();