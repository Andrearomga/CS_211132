import { Router } from 'express';
import { success } from '../../../network/response.js';
import { getData } from '../../../model/db.js';
import { getUser } from '../../../model/Users.js';

const router = Router();


router.get('/all_users_orm', async function (req, res) {
    getUser.findAll({ attributes: ['id','name'] })
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
        })
});


router.post('/register_user_orm', async function (req, res) {
    getUser.create({
        id: req.query.id,
        name: req.query.name,
     

    }).then((r) => {
        success(req, res, r, 200);

    })
        .catch((e) => {
            success(req, res, e, 400);
        });

});

router.put('/update_user_orm', async function (req, res) {
    let id = req.query.id;
    let newDato = req.query;
    getUser.findOne({ where: { id: id } })
        .then((r) => {
            r.update(newDato)
            success(req, res, r, 200);

        })
        .catch((e) => {
            success(req, res, e, 400);
        });
})




router.delete('/delete_users_orm', async function (req, res) {
    let id = req.query.id;
    console.log("id:" + req.query.id);
    getUser.destroy({
        where: {
            id: id
        }
    })

        .then((r) => {
            success(req, res, r, 200);
        })
        .catch((e) => {
            success(req, res, 400);
        });

});




export default router;