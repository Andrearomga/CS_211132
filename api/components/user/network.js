import { Router } from 'express';
import { success } from '../../../network/response.js';
import  {getData}  from '../../../model/db.js';
import { getUser } from '../../../model/Users.js';

const router = Router();




router.get('/success1', async function(req,res){
    
    const client = await getConnection();

    const query_request = {
        text: 'SELECT * FROM tbl_usersdb order by id',
    }
    
    client.query(query_request)
    .then(r =>{success(req, res, r, 200);})
    .catch(e =>{success(req, res, e.stack, 400);})


})

router.post('/register', async function (req,res){
    const client = await getData();

    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    let phone_number = req.query.phone_number;

    const query_request = {
        text: 'INSERT INTO tbl_usersdb(username, email, password, phone_number ) VALUES ($1, $2, $3, $4)',
        values: [username, email, password, phone_number]
    };

    client.query(query_request)
    .then(r =>{success(req, res, r, 200);})
    .catch(e =>{success(req, res, e.stack, 400);})
});

router.delete('/delete', async function (req,res){
    //Realiza conexion a DB
    const client = await getConnection();

    let id = req.query.id;

    const query_request = {
        text: `DELETE FROM tbl_usersdb WHERE id=${req.query.id}` ,
    };

    client.query(query_request)
    .then(r =>{success(req, res, r, 200) })
    .catch(e =>{ success(req, res, e.stack, 400) })
})


router.patch('/update', async function(req,res){
    const client = await getConnection();

    let id = req.query.id;
    let username= req.query.username;
    let email= req.query.email;
    let password= req.query.password;
    let phone_number=req.query.phone_number;
    const query_request={
        text: `update tbl_usersdb set username=$2, email=$3 , password=$4 , phone_number=$5 where id=$1 `,
        values: [id, username, email, password, phone_number]
      
    };
    client
    .query(query_request)
    .then((r) => {
      success(req, res, r, 200);
    })
    .catch((e) => {
      success(req, res, e, 200);
    });
});

router.get('/all_users_orm', async function(req,res){
    getUser.findAll({attributes: ['username','email','password','phone_number']})
    .then(users=>{
        res.send(users)
    })
    .catch(err=>{
        console.log(err)
    })
});


export default router;