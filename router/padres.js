import { Router } from "express";
import { getpadre } from "../model/padre.js";
import { getUser } from "../model/Users.js";
import { gethijo} from "../model/hijo.js";

const router = Router();

router.get('/padre_list', async function (req, res) {
    getpadre.findAll({
        include:{
            model:gethijo,
            attributes:['name','lastNameF','lastNameM','age']
        },
        attributes: ['id','name','lastNameF','lastNameM','age'] })
        .then(padre => {
            res.send(padre)
        })
        .catch(err => {
            console.log(err)
    })
});

router.post('/padre_post', async function (req, res) {

    getpadre.create({
        name: req.query.name,
        lastNameF: req.query.lastNameF,
        lastNameM: req.query.lastNameM,
        age:req.query.age,
        catUserId: req.query.catUserId
    })
        .then(padre => {
            res.send(padre);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.put('/padre_update', async function (req, res) {
    let id = req.query.id;
    
    let newDato = req.query;
    getpadre.findOne({
        where: { id: id },
    })
        .then(padre => {
            padre.update(newDato)
                .then(newpadre => {
                    res.send(newpadre)
                })
        })
});

router.delete('/padre_delete', async function (req, res) {
    let id = req.query.id

    getpadre.destroy({
        where: { id: id }
    }).then(() => {
        res.send('padre eliminado')
    })
});

export default router;






