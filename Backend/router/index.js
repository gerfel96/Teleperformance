const {Router}=require('express');
const router=Router();
const productSchema=require('../model/registro')

router.get('/',async (req,res)=>{
    const products=await productSchema.find();
    res.json(products);
});

router.post('/',async (req,res)=>{
    const product=new productSchema({
        documento:req.body.documento,
        nombre:req.body.name,
        apellido:req.body.apellido,
        f_inicio:req.body.f_inicio,
        f_fin: req.body.f_fin,
        h_i_turno:req.body.h_i_turno,
        h_f_turno:req.body.h_f_turno,
        h_i_extra:req.body.h_i_extra,
        h_f_extra:req.body.h_f_extra,
        motivo:req.body.motivo
    });
    await product.save();
    res.send('Guardado');
});



module.exports=router;