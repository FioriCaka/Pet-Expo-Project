const { MongoClient } = require('mongodb');
require('dotenv').config();


const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function getAnimals(type) {
  try {
    await client.connect();
    const db = client.db('petexpo');
    const collection = db.collection('animals');
    const query = type && type !== 'all' ? { type } : {};
    const cursor = collection.find(query);
    return cursor.toArray();
  } catch (e) {
    console.error('Error:', e);
  } finally {
    await client.close();
  }
}

async function getAdmin(username) {
  try {
    await client.connect();
    const db = client.db('petexpo');
    const collection = db.collection('admin');
    const admin = await collection.findOne({ username });
    return admin;
  } catch (e) {
    console.error('Error:', e);
  } finally {
    await client.close();
  }
}

module.exports = { getAnimals, getAdmin };
