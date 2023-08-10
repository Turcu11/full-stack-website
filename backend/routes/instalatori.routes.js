import { Router } from "express";
import { Departament, Instalator } from "../db.js";
import bodyParser from "body-parser";
const router = Router();

router.get("/:instalatorId/all", async (req, res) => {
  const id = req.params.instalatorId;
  const instalatoriToSend = [];
  const instalatorii = await Instalator.findAll({
    where: { id: id },
  });
  for (let i = 0; i < instalatorii.length; i++) {
    instalatoriToSend.push({
      id: instalatorii[i].id,
      nume: instalatorii[i].nume,
      prenume: instalatorii[i].prenume,
      departament: instalatorii[i].departament,
    });
  }
  res.send(instalatoriToSend);
});

router.get("/all", bodyParser.json(), async (req, res) => {
  const list = await Instalator.findAll({
    attributes: ["id", "nume", "prenume"],
    include: {
      model: Departament,
      attributes: ["id", "nume"],
    },
  });

  const listToSend = [];
  for (let i = 0; i < list.length; i++) {
    listToSend.push({
      id: list[i].dataValues.id,
      nume: list[i].dataValues.nume,
      prenume: list[i].dataValues.prenume,
    });
  }
  res.send(listToSend);
});

router.post("/", bodyParser.json(), async (req, res) => {
  const nume = req.body.nume;
  const prenume = req.body.prenume;
  const departament = req.body.DepartamentId;
  const instalator = await Instalator.create({ nume, prenume, departament });

  res.send({ id: instalator.id });
});

router.delete("/", bodyParser.json(), async (req, res) => {
  const id = req.body.id;
  await Instalator.destroy({ where: { id: id } });
  res.send(`Deleted succesful the row at id: ${id}`);
});

export default router;
