const Book = require('../Models/Book');
const User = require('../Models/User');
// const LibraryBook = require('../Models/LibraryBook');

exports.issueBook = async (req,res)=>{
    const { userId, bookId, username, contact, issueDate, duration } = req.body;
    try{
        const book = await Book.findOne({where:{bookId}});

        if(!book || book.status !== 'available')
        {
            return res.status(400).json({ message: 'Book is unavailable or not found.' });
        }

        const issue = await User.create({
            userId, 
            bookId, 
            username, 
            contact, 
            issueDate, 
            duration
        })

        book.status = 'unavailable';
        await book.save();
        res.status(200).json({ message: 'Book issued successfully', issue });
    } 
    catch (err) {
      res.status(500).json({ message:err.message });
    }
}

exports.getUser = async (req, res) => {
    const { userId } = req.body;
  
    try {
      const user = await User.findOne({
        where: { userId },
        include: [
          {
            model: Book,
            attributes: ['bookId', 'title', 'author', 'genre', 'publishedYear', 'price'], 
          },
        ],
      });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      res.status(200).json({ user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred while retrieving the user.' });
    }
  };