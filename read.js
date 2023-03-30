const data=require("./connection");
async function read(){
  let a=await data();
  let result=await a.find().toArray();
  console.log(result);
}
read();