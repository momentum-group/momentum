import clientPromise from '../../middleware/database';
import hash from 'object-hash'

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("org_companyName");

    switch (req.method) {
      case "POST":
        const user = await db.collection("users").find({email: {$eq: req.body.email}}).toArray();
        if (user.length != 0) { // User exists
            console.log("users exists")
            res.json({ status: 400, data: {"reason": "User already exists"}});
            break;
        }

        const employer = await db.collection("employer").find({company: {$eq: req.body.company},}).toArray();
        if (employer.length == 0) { // Employer doesn't exist
            res.json({ status: 400, data: {"reason": "Company doesn't exist"}});
            break;
        }

        const newUser = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            company: req.body.company,
            email: req.body.email,
            password: hash(req.body.password),
            is_employer: req.body.is_employer,
            result: {createdAt: "none", schedule: []},
            availability: new Array(336)
        }

        const users = db.collection("users");
        const result = await users.insertOne(newUser);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);

        res.json({ status: 200 });
        break;
    }
}