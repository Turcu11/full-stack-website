import express from "express";
import instalatorRouter from "./routes/instalatori.routes.js"
import departamentRouter from "./routes/departament.routes.js"
import contactRouter from "./routes/contact.routes.js"
const app = express();
const port = 3000;
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use("/instalator", instalatorRouter);
app.use("/departament", departamentRouter)
app.use("/contact", contactRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

