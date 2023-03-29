import { MongoClient } from "mongodb";

// /api/new-meetup
// Only POST requests will trigger function

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    MongoClient.connect(
      "mongodb+srv://Griffin:zIhHEqqHqHhPREdM@cluster0.o8blapn.mongodb.net/meetups?retryWrites=true&w=majority"
    );
  }
}

export default handler;
