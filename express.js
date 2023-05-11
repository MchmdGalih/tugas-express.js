require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/biodata", (req, res) => {
  const { nama, tempatLahir, tanggalLahir, alamat } = req.body;

  res.send({
    nama: nama,
    tempatLahir: tempatLahir,
    tanggalLahir: tanggalLahir,
    alamat: alamat,
  });
});

app.post("/api/biodata", (req, res) => {
  const { nama, tempatLahir, tanggalLahir, alamat } = req.query;

  res.send({
    nama: nama,
    tempatLahir: tempatLahir,
    tanggalLahir: tanggalLahir,
    alamat: alamat,
  });
});

app.listen(port, () => {
  console.log(`Server at listen http://localhost:${port}`);
  console.log(`its sample running on the http://localhost:${port}`);
  console.log(`DB HOST ${process.env.DB_HOST}`);
  console.log(`DB NAME on ${process.env.DB_NAME}`);
});
