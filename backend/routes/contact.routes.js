import { Router } from "express";
import bodyParser from "body-parser";
import { Contact } from "../db.js";
const router = Router();

export default router.post("/", bodyParser.json(), async (req, res) => {
  const nume = req.body.nume;
  const prenume = req.body.prenume;
  const compania = req.body.compania;
  const email = req.body.email;
  const mesaj = req.body.mesaj;
  const contact = await Contact.create({ nume, prenume, compania, email, mesaj });

  res.send({ id: contact.id });
});

router.get("/all", bodyParser.json(), async (req, res) => {
    const list = await Contact.findAll({
      attributes: ["id","nume", "prenume", "compania", "mesaj"],
    });
  
    const listToSend = [];
    for (let i = 0; i < list.length; i++) {
      listToSend.push({
        id: list[i].dataValues.id,
        nume: list[i].dataValues.nume,
        prenume: list[i].dataValues.prenume,
        compania: list[i].dataValues.compania,
        mesaj: list[i].dataValues.mesaj,
      });
    }
    res.send(listToSend);
  });

  router.delete("/", bodyParser.json(), async (req, res) => {
    const id = req.body.id;
    console.log(`id: ${id}`)
    await Contact.destroy({ where: { id: id } });
    res.send(`Deleted succesful the row at id: ${id}`);
  });
