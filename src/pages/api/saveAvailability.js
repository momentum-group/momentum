import clientPromise from '../../middleware/database';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("org_companyName");

    switch (req.method) {
      case "POST":
        const database = client.db("org_companyName");
        const users = database.collection("users");

        // create a filter for a movie to update
        const filter = { email: req.body.email };
        console.log(req.body.email)
        // create a document that sets the plot of the movie
        const updateDoc = {
            $set: {
                availability: req.body.availability
            },
        };
        const result = await users.updateOne(filter, updateDoc);

        res.json({ status: 200 });
        break;
    }
}