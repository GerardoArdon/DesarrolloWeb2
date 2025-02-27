const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];
  
  function getBooks() {
    return data;
  }
  
  function getBook(id) {
    return data.find((d) => d.id === id);
  }

  const book = getBook(1);
  console.log(book)

  //Destructuring
  const {title, author, genres, pages:numPages} = book;

  console.log(title)
  console.log(author)
  console.log(genres)
  console.log(numPages)

  const [primaryGenre, secondaryGenre,,...otherGenres] = genres
  console.log(primaryGenre)
  console.log(secondaryGenre)
  console.log(otherGenres)

  // Spread operator

  const copyBook = {...book};
  const extendedBook = {book, editorial:'Clasicos Roxsil'}
  console.log(extendedBook)

  // Operador consicional y template strings
  const pagesRange=numPages>500?'More than 500 pages':'Less than 500 pages'
  console.log(pagesRange)
  const summary = `${title} is a book of ${author} and has ${pagesRange}`
  console.log(summary)

  //Arrow functions

  const sumReviews=(book)=>{
    const goodreadsReviews=book.reviews.goodreads.reviewsCount;
    const libraryThing = book.reviews.librarything?.reviewsCount||0;
    return goodreadsReviews + libraryThing
  }

  const getBookSummary=(book)=> ({
    title,author
  })

  console.log(sumReviews(getBook(3)))
  console.log(getBookSummary(getBook(3)))

  //Funcion map
  const books = getBooks()
  const titles = books.map(book=>book.title)
  console.log(titles)

  //Funcion filter
  const longBooks = books.filter(book=>book.pages>1000).map(book=>({
    title:book.title,
    pages:book.pages}));
  console.log(longBooks)

  //Operaciones inmutables

  // a) Agregando un nuevo libro
  const newBook={
    id: 10,
    title: "Un dia en la vida",
    publicationDate: "1996-08-01",
    author: "Manlio Argueta"};

    console.log(newBook);
    const extendedBooks=[...books, newBook];
    console.log(extendedBooks)

    // Eliminando el libro con id 5
    const booksAfterDelete=extendedBooks.filter((book)=>book.id!==5)
    console.log(booksAfterDelete)

    //Modificando el libro con id 1
    const newName = 'Dos dias en la vida'
    const booksAfterUpdate=[...booksAfterDelete.filter(book=>booksAfterDelete.id!==5),
      {...getBook(1), title:newName
    }]

    console.log(booksAfterUpdate)

    const booksAfterUpdate2=booksAfterDelete.map(
                        book=>book.id!==1?book:{...book,title:newName})
    console.log(booksAfterUpdate2)

    //Promesas
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    
    //async await

    const getuser=async(idUser)=>{
      const result= await fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
      const user = await result.json()
      console.log(user)
    }

    getuser(1)