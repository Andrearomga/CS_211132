import { Router } from "express";
import { getimg } from "../model/imagen.js";
import multer from 'multer';

const router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './assets/img')
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        cb(null,`${file.originalname}`)
    }
})

const upload = multer({ storage })

router.post('/upload',upload.single('name'),async function(req,res){
    getimg.create({
        name: req.file.originalname
    },{
        fields: ['name']
    })
    .then(img=>{res.send(img)})
    .catch(err=>{
        console.log(err)
    })
})

router.get('/get_all', async function (req, res) {
    getimg.findAll({ exclude: [] })
        .then(img => {
            res.send(img)
        })
        .catch(err => {
            console.log(err)
        })
});
router.delete('/destroy_image_orm', async function (req, res) {
        let id = req.query.id

     getimg.destroy({
         where: { id: id }
     }).then(() => {
         res.send('imagen eliminado')
     })
});


export default router;