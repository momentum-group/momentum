import clientPromise from '../../middleware/database';
import hash from 'object-hash'

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("org_companyName");

    switch (req.method) {
      case "POST":
        const user = await db.collection("users").find({email: {$eq: req.body.email}, password: {$eq: hash(req.body.password)}}).toArray();
        if (user.length != 0) {
            res.json({ status: 200, data: user });
        } else {
            res.json({ status: 400 });
        }

        break;
    }
}