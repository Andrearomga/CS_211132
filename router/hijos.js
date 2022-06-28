import { gethijo } from '../model/hijo.js';
import { Router } from 'express';

const router = Router();

router.get('/hijo_list', async function (req, res) {
    gethijo.findAll({})
    
    .then((hijo)=> {
        res.send(hijo);
    })
    .catch((err) => {
        console.log(err);
    });
}) 
  
router.post('/hijo_post', async function (req, res) {

    gethijo.create({
        name: req.query.name,
        lastNameF: req.query.lastNameF,
        lastNameM: req.query.lastNameM,
        age:req.query.age,
        catPadreId:req.query.catPadreId
    })
        .then(hijo => {
            res.send(hijo);
        })
        .catch((err) => {
            console.log(err);
    });
});


router.put('/hijo_update', async function (req, res) {
    let id = req.query.id;
    let newDato = req.query;
    gethijo.findOne({
        where: { id: id },
    })
        .then((hijo) => {
            hijo.update(newDato)
                .then(newhijo => {
                    res.send(newhijo)
            })
        })
});

router.delete('/hijo_delete', async function (req, res) {
    let id = req.query.id
    gethijo.destroy({
        where: { id: id }
    }).then(() => {
        res.send('hijo eliminado')
    })
});

export default router;