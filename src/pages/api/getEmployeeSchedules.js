import clientPromise from '../../middleware/database';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("org_companyName");

    switch (req.method) {
      case "POST":
        const users = await db.collection("users").find({company: {$eq: req.body.company}}).toArray();

        res.json({ status: 200, users: JSON.parse(JSON.stringify(users)) });
        break;
    }
}