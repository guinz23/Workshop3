const clientesController={};
const Clientes=require('../models/Clientes');

clientesController.getClientes=async(req,res)=>{
    const clientes = await  Clientes.find();
     res.status(200).json(clientes);
}
clientesController.createClientes=async(req,res)=>{
    try {
        const {name,lastname,phone}= req.body;
        const cliente=new Clientes({name,lastname,phone});
        await cliente.save();
        res.status(200).json('New Client added');
    } catch (error) {
        res.json(error);
    }
}



module.exports=clientesController;