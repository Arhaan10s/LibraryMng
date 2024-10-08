const Library = require('../Models/Library')
const Book = require('../Models/Book')

exports.createLib = async (req,res)=>{

    try{
        const { libraryId, name, contactNo, address, openingHour, closingHour } = req.body;
    
        const library = await Library.create({
            libraryId,
            name,
            contactNo,
            address,
            openingHour,
            closingHour,
        })
        if(library)
        {
            res.status(200).json({
                status:true,
                message:"Library created successfully",
                data:library
            })
        }else
        {
            res.status(404).json({
                status:false,
                message:"Library cannot be created",
            })
        }
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

exports.updateLib = async (req,res)=>{

    const {libraryId, ...updatedData} = req.body;

    try{
    
        const library = await Library.findOne({
            where:{ libraryId }
        })
    
        if(!library){
            res.status(401).json('Library not found');
        }
    
        const [updated] = await Library.update(updatedData, {
            where:{ libraryId }
        })

        if(updated){
            const updatedLib = await Library.findOne({
                where:{ libraryId }
            })
            res.status(200).json({
                message:"Library updated successfully",
                data: updatedLib
            })
        }else{
            res.status(404).json('Library not found');
        }
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

exports.deleteLib = async (req,res)=>{
    const { libraryId } = req.body;
    
    try{

        const library = await Library.findOne({
            where:{ libraryId }
        })

        if(!library){
            res.status(404).json({"error": "Library not found"})
        }

        const del = await Library.destroy({
            where:{ libraryId }
        })

        if(del){

            res.status(204).json({
                message:'Library deleted successfully',
                data:del
            })
        }

        else{
            res.status(404).json("unable to delete library");
        }

    }
    catch(err){
        res.status(500).Library({message:err.message});
    }

}

exports.getLib = async (req,res)=>{
    const { libraryId } = req.body;
    try{
        const library = await Library.findAll({
            where: { libraryId },
            include:Book,
            as:'Books',
        })
        if (!library) {
            return res.status(404).json({ message: 'library not found' });
        }

        res.status(200).json(library)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}