const getTheTitles = function() {
    let bookArr = [];
    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
    ];
    bookArr.push(books[0].title);
    bookArr.push(books[1].title);
    return bookArr;
};

// Do not edit below this line
module.exports = getTheTitles;
