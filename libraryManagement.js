const groupBooksByAuthor = ( books) => {   

    return books.reduce((acc, book) => {   
      
      if (!acc[book.author]) acc[book.author] = [];
      
      acc[book.author].push(book);
      return acc;
    }, {});
        
  };
  
  const findBooksPublishedAfter = (books, year) => books.filter(book => book.year > year).map(book => book.title);
  const generateBookSummaries = (books) => books.map(book => `${book.title} by ${book.author} (${book.year})`);
  const sortByPublicationYear = (books) => books.sort((a, b) => a.year - b.year);
  
  console.log(groupBooksByAuthor([{ title: 'Book A', author: 'Author x', year: 2000 }, { title: 'Book B', author: 'Author x', year: 2005 }]));
  console.log(findBooksPublishedAfter([{ title: 'Book A', author: 'Author x', year: 2000 }], 1999));
  console.log(generateBookSummaries([{ title: 'Book A', author: 'Author x', year: 2000 }]));
  console.log(sortByPublicationYear([{ title: 'Book A', author: 'Author x', year: 2000 }, { title: 'Book B', author: 'Author x', year: 2005 }]));
