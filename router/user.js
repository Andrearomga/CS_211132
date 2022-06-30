import { Router } from "express";
import { getUser } from "../model/Users.js";

const router = Router();

router.get('/get_all', async function (req, res) {
    getUser.findAll({ exclude: [] })
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
        })

});


router.post('/insert', async function (req, res) {
    getUser.create({
        name: req.query.name,
        email: req.query.email,
        password: req.query.password,
        phone_number: req.query.phone_number
    }, { fields: ['name', 'email', 'password', 'phone_number'] })

        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
        })

});

router.delete("/delete_user_orm", async function (req, res) {
    let id = req.query.id;
    console.log("id:" + req.query.id);
    getUser
      .destroy({
        where: {
          id: id,
        },
      
    }).then(() => {
      res.send('Usuario  eliminado');
  })
  });


  //update using Sequelize
router.put("/update_user_orm", async function (req, res) {
    let id = req.query.id;
    let newData = req.query;
    getUsers.findOne({
        where: { id: id },
    })
        .then(User => {
            User.update(newData)
                .then(newUser => {
                    res.send(newUser)
                })
        })
  });
export default router;