const {Schema, model}=require('mongoose');

const registroSchema=new Schema({
    documento:Number,
    nombre:String,
    apellido:String,
    f_inicio:Date,
    f_fin: Date,
    h_i_turno:String,
    h_f_turno:String,
    h_i_extra:String,
    h_f_extra:String,
    motivo:String
});

module.exports=model('registro',registroSchema)