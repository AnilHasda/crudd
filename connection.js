const {MongoClient}=require("mongodb");
const url="mongodb://127.0.0.1:127017";
const client=new MongoClient(url);
async function data(){
  let result=await client.connect();
  let db=result.db("anil");
  let collection=await db.collection("student");
  return collection;
}
module.exports=data;