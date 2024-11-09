const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "coba_mongo_node";

const client = new MongoClient(url);

async function crudMongoNode() {
  try {
    await client.connect();
    console.log("Koneksi berhasil");

    // Pilih database
    const db = client.db(dbName);

    // Menambahkan 1 data ke collection 'mahasiswa'
    const tambahSatuData = await db.collection("mahasiswa").insertOne({
      nama: "Wyxli",
      email: "wyxli@gmail.com",
    });
    console.log(
      "Data berhasil ditambahkan menggunakan insertOne:",
      tambahSatuData
    );

    // Menambahkan lebih dari 1 data menggunakan insertMany
    const tambahLebihBanyakData = await db.collection("mahasiswa").insertMany([
      {
        nama: "Testing 1 insertMany",
        email: "insertmany1@gmail.com",
      },
      {
        nama: "Testing 2 insertMany",
        email: "insertmany2@gmail.com",
      },
      {
        nama: "Testing 3 insertMany",
        email: "insertmany3@gmail.com",
      },
    ]);
    console.log(
      "Data berhasil ditambahkan menggunakan insertMany:",
      tambahLebihBanyakData
    );

    // menampilkan semua data yang ada di collection 'mahasiswa' menggunakan find()
    const tampilkanSemuaData = await db
      .collection("mahasiswa")
      .find()
      .toArray();
    console.log("Berhasil menampilkan data", tampilkanSemuaData);

    // menampilkan data berdasaekan kriteria yang ada di collection 'mahasiswa' menggunakan find()
    const tampilkanSemuaDataKriteria = await db
      .collection("mahasiswa")
      .find({ nama: "Testing 3 insertMany" })
      .toArray();
    console.log(
      "Berhasil menampilkan data berdasarkan kriteria",
      tampilkanSemuaDataKriteria
    );

    // update data berdasarkan id tertentu mengunakan updateOne
    const updatePromise = db.collection("mahasiswa").updateOne(
      {
        _id: new ObjectId("672ec530e98e2186753d7ff1"),
      },
      {
        $set: {
          nama: "Wyxli Updated 2",
        },
      }
    );

    updatePromise
      .then((result) => console.log(result))
      .catch((error) => console.log(error));

    // mengubah data lebih dari 1, berdasarkan kriteria
    db.collection("mahasiswa").updateMany(
      {
        nama: "Wyxli",
      },
      {
        $set: {
          nama: "Wyxli Doang",
        },
      }
    );

    // menghapus 1 data
    db.collection("mahasiswa")
      .deleteOne({
        _id: new ObjectId("672ec530e98e2186753d7ff1"),
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // mengahapus lebih dari 1 data
    db.collection("mahasiswa")
      .deleteMany({
        nama: "Wyxli Doang",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error("Koneksi atau ada proses data gagal", error);
  } finally {
    await client.close();
    console.log("Koneksi ditutup");
  }
}

crudMongoNode();
