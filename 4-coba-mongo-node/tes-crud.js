const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "coba_mongo_node";

const client = new MongoClient(url);

async function tampilkanData() {
  try {
    await client.connect();
    console.log("Connected...");

    const db = client.db(dbName);

    const tampilkanDataMahasiswa = await db
      .collection("mahasiswa")
      .find()
      .toArray();
    console.log(tampilkanDataMahasiswa);

    await client.close();
    console.log("Connection Closed...");
  } catch {
    console.error("Koneksi atau ada proses data gagal", error);
  }
}

tampilkanData();
