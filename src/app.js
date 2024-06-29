const express = require("express");
const applyMiddleware = require("./middleware");
const router = require("./routers");

const app = express();

applyMiddleware(app);

app.use(router);



app.use((err,_req,res,_next)=>{
  res.status(err.status||500).json({
    message:err.message,
    error:err.error
  })
})


app.get('/health',(_req,res)=>{
  res.status(200).json({message:'Server Health Ok'})
})





module.exports = app;



// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)

//     app.get("/users/e/:email", async (req, res) => {
//       const email = req.params.email;

//       const result = await usersCollection.findOne({ email });
//       res.status(200).json(result);
//     });

//     app.get("/users/i/:id", async (req, res) => {
//       const id = req.params.id;
//       console.log(id);
//       const result = await usersCollection.findOne({ _id: new ObjectId(id) });

//       if (!result)
//         return res.status(400).json({ message: "Resources Not found" });
//       res.status(200).json(result);
//     });

//     app.post("/users", async (req, res) => {
//       const user = req.body;
//       const resutl = await usersCollection.insertOne(user);
//       res.status(201).json(resutl);
//     });

//     app.get("/users", async (_req, res) => {
//       const resutl = await usersCollection.find().toArray();
//       const mapUser = resutl.map((user) => ({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         createAt: user.createAt,
//         updateAt: user.updateAt,
//         role: user.role,
//       }));
//       res.status(200).json(mapUser);
//     });

//     // All transports methods are here

//     app.post("/transports", async (req, res) => {
//       const { busSeat, busName, stopes } = req.body;

//       if (!busName)
//         return res.status(400).json({ message: "Bus name is Required" });
//       if (busSeat.length === 0)
//         return res.status(400).json({ message: "Bus Seat are Required" });
//       if (stopes.length === 0)
//         return res.status(400).json({ message: "Bus stopes are Required" });

//       const bus = req.body;

//       const result = await transportsCollection.insertOne(bus);

//       if (!result.insertedId) {
//         return res.status(400).json({ message: "Something went wrong" });
//       }

//       res.status(201).json(result);
//     });

//     app.put("/transports/:id", async (req, res) => {
//       const id = req.params.id;
//       const updatedBus = req.body;

//       const result = await transportsCollection.updateOne(
//         { _id: new ObjectId(id) },
//         { $set: updatedBus },
//         { upsert: true }
//       );

//       if (!result.matchedCount && !result.modifiedCount) {
//         return res.status(400).json({ message: "Not updated", result });
//       }

//       res.status(200).json(result);
//     });

//     app.delete("/transports/:id", async (req, res) => {
//       const id = req.params.id;
//       const result = transportsCollection.deleteOne({ _id: new ObjectId(id) });

//       res.status(200).json(result);
//     });

//     app.get("/transports/:id", async (req, res) => {
//       const id = req.params.id;

//       const queary = { _id: new ObjectId(id) };

//       const result = await transportsCollection.findOne(queary);

//       if (!result) return res.status(400).json({ message: "Bus Not found" });

//       res.status(200).json(result);
//     });

//     app.get("/transports", async (_req, res) => {
//       const result = await transportsCollection.find().toArray();

//       res.status(200).json(result);
//     });

//     app.get("/seats/:busId", async (req, res) => {
//       const busId = req.params.busId;
//       const result = await transportsCollection.findOne({
//         _id: new ObjectId(busId),
//       });
//       const data = {
//         seats: result.busSeat,
//         pattan: result.seatPattan,
//         stopes: result.stopes,
//         busName: result.busName,
//       };

//       res.status(200).json(data);
//     });

//     app.post("/booking", async (req, res) => {
//       const { busId, seatId, user, busName, seatName } = req.body;

//       const bookingInfo = new BookingInfo(
//         busId,
//         seatId,
//         user,
//         seatName,
//         busName
//       );

//       const result = await bookingCollection.insertOne(bookingInfo);

//       res.status(200).json(result);
//     });

//     app.delete("/booking/:id", async (req, res) => {
//       const bookingId = req.params.id;

//       const result = await bookingCollection.deleteOne({
//         _id: new ObjectId(bookingId),
//       });

//       res.status(200).json(result);
//     });

//     app.get("/booking", async (_req, res) => {
//       const result = await bookingCollection.find().toArray();

//       res.status(200).json(result);
//     });

//     app.patch("/tickets/:id", async (req, res) => {
//       const { busSeat, seatId } = req.body;
//       const id = req.params.id;

//       const result = await transportsCollection.updateOne(
//         { _id: new ObjectId(id) },
//         { $set: { "busSeat.$[el]": busSeat } },
//         { arrayFilters: [{ "el.seatId": seatId }] }
//       );

//       res.status(200).json(result);
//     });

//     app.get("/health", async (_req, res) => {
//       res.status(200).json({ message: "Success" });
//     });

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     //await client.close();
//   }
// }
// run().catch(console.dir);
