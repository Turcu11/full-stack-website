import { Router } from "express";
import { Departament, Instalator } from "../db.js";
import bodyParser from 'body-parser';
const router = Router();

router.get("/all", async (req, res) => {
  const departament = await Departament.findAll({
    attributes: ["id", "nume", "descriere"],
    include: {
      model: Instalator,
      attributes: ["id", "nume"],
    },
  });

  const departamentToSend = [];
  for (let i = 0; i < departament.length; i++) {
    departamentToSend.push({
      id: departament[i].dataValues.id,
      nume: departament[i].dataValues.nume,
      descriere: departament[i].dataValues.descriere,
    });
  }
  res.send(departamentToSend);
});

router.post("/", bodyParser.json(), async(req, res) => {
  const nume = req.body.nume;
  const descriere = req.body.descriere;
  const departament = await Departament.create({nume, descriere});

  res.send({id: departament.id})
});

router.delete("/", bodyParser.json(), async(req, res) => {
  const id = req.body.id
  await Departament.destroy({where: {id:id}})
  res.send(`Deleted succesful the row at id: ${id}`)
})


export default router;
