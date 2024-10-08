const Book = require('../Models/Book');

exports.createBook = async (req,res)=>{
    const { bookId, libraryId, title, author, genre, publishedYear, price, status} = req.body;
    try{
        const book = await Book.create({
            bookId,
            libraryId, 
            title, 
            author, 
            genre, 
            publishedYear, 
            price, 
            status
        })

        if(book)
        {
            res.status(200).json({
                message: 'Book added successfully',
                data:book
            })
        }
        else
        {
            res.status(404).json('Unable to create book')
        }
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}



