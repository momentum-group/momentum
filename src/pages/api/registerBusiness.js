import clientPromise from '../../middleware/database';

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("org_companyName");

    switch (req.method) {
      case "POST":
        const employer = await db.collection("employer").find({company: {$eq: req.body.company},}).toArray();
        if (employer.length != 0) { // Employer already't exist
            res.json({ status: 400, data: {"reason": "Company already exists"}});
            break;
        }

        const newCompany = {
            company: req.body.company,
            need_capacity: new Array(336)
        }

        const users = db.collection("employer");
        const result = await users.insertOne(newCompany);

        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        
        res.json({ status: 200 });
        break;
    }
}