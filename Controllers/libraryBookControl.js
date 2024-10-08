const LibraryBook = require('../Models/LibraryBook');
const Book = require('../Models/Book');
const Library = require('../Models/Library');



exports.addBookToLibrary = async (req,res)=>{
    const { bookId, libraryId } = req.body;
    try{
        const book = await Book.findByPk(bookId);
        const library = await Library.findByPk(libraryId);

        if(!book)
        {
            return res.status(403).json('Book not found')
        }
        if(!library)
        {
            return res.status(403).json('Library not found')
        }

        let bookLib = await LibraryBook.findOne({
            where:{
                bookId,
                libraryId
            }
        })
        if(bookLib)
        {
            return res.status(200).json('Book already exists in the Library')
        }
        const libBook = await LibraryBook.create({
            bookId,
            libraryId
        })

        res.status(200).json({
            status:'success',
            message: 'Book added to library successfully',
            data:libBook
        })

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

exports.getBook = async (req,res)=>{
    const { bookId,libraryId } = req.body;

    try{
        const book = await LibraryBook.findOne({
            where:{
                bookId,
                libraryId
            },
            include:Book
        })
        if(!book)
        {
           return res.status(404).json('Book not found');
        }
        res.status(200).json(book)
    }
    catch(err){
        res.status(500).json({message: err.message});
    }

}

exports.updateBook = async (req,res)=>{
    const { bookId, libraryId, ...updatedData } = req.body;

    try{
        const book = await LibraryBook.findOne({
            where:{
                bookId,
                libraryId
            }
        })
        
        if(!book){
            return res.status(404).json({message: 'Book not found'})
        }

        const [updated] = await Book.update(updatedData,{
            where:{ bookId }
        })

        if(updated){
            const updatedBook = await LibraryBook.findOne({
                where:{
                     bookId,
                    libraryId 
                }
            })
            
            res.status(200).json({
                message:"Library updated successfully",
                data: updatedBook,
            })
        }
        else{
            res.status(404).json('Library not found');
        }
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
}

exports.deleteBook = async (req,res)=>{
    const { bookId, libraryId } = req.body;
    try{
        const book = await LibraryBook.findOne({
            where:{
                bookId,
                libraryId
            }
        })

        if(!book){
            res.status(404).json('Book not found');
        }

        const delBook = await LibraryBook.destroy({
            where:{
                bookId,
                libraryId
            }
        })

        if(delBook)
        {
            res.status(200).json({
                message: 'Book deleted successfully',
                data: delBook
            })
        }
        else
        {
            res.status(404).json('unable to delete book')
        }

    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}