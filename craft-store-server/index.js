const express = require('express');
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000


// middleware
app.use(cors())
app.use(express.json())






// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER}@cluster0.oj7uysy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oj7uysy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

const craftCollection = client.db('craftDB').collection('craft')


app.post('/addCraft', async (req,res)=>{
  console.log(req.body);
  const result = await craftCollection.insertOne(req.body)
  console.log(result);
  res.send(result)
})



app.get('/myArt/:email', async (req,res) =>{
  console.log(req.params.email);
  const result = await craftCollection.find({email: req.params.email}).toArray()
  res.send(result)
})


app.get('/allpost', async(req,res)=>{
  const cursor = craftCollection.find()
  const result = await cursor.toArray()
  res.send(result) 
})


app.get('/allcard', async(req,res)=>{
  const cursor = craftCollection.find()
  const result = await cursor.toArray()
  res.send(result) 
})


app.get("/singleProducts/:id", async(req,res)=>{
  const result =await craftCollection.findOne({_id:new ObjectId (req.params.id)})
  res.send(result)
})



app.put("/updateProducts/:id", async(req,res)=>{
  console.log(req.params.id);
  const query = {_id: new ObjectId(req.params.id)}
  const data ={
    $set:{
      item_name:req.body.item_name,
      subcategory_Name:req.body.subcategory_Name,
      price:req.body.price.customariztion,
      short_description:req.body.short_description,
      processing_time:req.body.processing_time,
      stock:req.body.stock,
      rating:req.body.rating,
      photo:req.body.photo
    }
  } 

  
  
  const result = await craftCollection.updateOne(query,data)
  console.log(result);
  res.send(result)
})


app.delete("/delete/:id",async(req,res)=>{
  const result = await craftCollection.deleteOne({_id: new ObjectId(req.params.id)})
  console.log(result);
  res.send(result)
})
    
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Craft store making server is running')
})

app.listen(port, ()=>{
    console.log(`Craft Server is running at: http://localhost:${port}`);
})
