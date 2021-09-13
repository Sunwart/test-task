// const someProperty = 'quantity';
// const book = {
//   title: 'Pum-purum',
//   author: 'John Doe',
//   rating: 5.0,
//   public: true,
//   [someProperty]: 25,
// };

// book.pages = 98;
// console.log(book.pages);
// book.something = 'ku!';
// console.log(book.something);

// console.log(book.author);
// const bookTitle = book['title'];
// console.log(bookTitle);

// console.log(book.rating);
// book.rating = 10;
// console.log(book.rating);

// console.log(book.quantity);

// const user = {
//   name: 'Vyacheslav Aivazyan',
//   tag: 'slavik',
//   hobbies: ['fishing', 'music', 'sport'],
//   location: {
//     country: 'Ukraine',
//     city: 'Gnidyn',
//   },
//   stats: {
//     followers: 100500,
//     following: 1,
//     views: 300700,
//     likes: 300700,
//   },
// };

// console.log(user.name);
// console.log(user.location.city);
// console.log(`кількість вказаних інтересів ${user.hobbies.length}`);

// const bookShelf = {
//   books: ['book1', 'book2', 'book3'],
//   getBooks() {
//     console.log(this.books);
//   },
//   addBook(bookNames) {
//     for (bookName of bookNames) {
//       this.books.push(bookName);
//     }
//   },
// };
// bookShelf.addBook(['book4', 'book5', 'book6']);
// bookShelf.getBooks();

// const book = {
//   title: 'Title X',
//   author: 'Author N',
//   'some property': 43,
// };
// console.log(book['some property']);

// const newBook = Object.create(book);
// newBook.pages = 128;

// for (const key in newBook) {
//   if (newBook.hasOwnProperty(key)) {
//     console.log(key, ' - ', newBook[key]);
//   }
// }

// const keys = Object.keys(newBook);
// for (const key of keys) {
//   console.log(key, ' is ', newBook[key]);
// }

// console.log(Object.values(book));
// console.log(Object.values(newBook));

// console.log(Object.entries(book)[0]);
// console.log(Object.entries(newBook));

// const animal = {
//   legs: 4,
//   tail: 1,
// };
// const dog = Object.create(animal);
// dog.name = 'Archi';
// console.log(dog);
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4
// console.log(dog.hasOwnProperty('name'));
// console.log(dog.hasOwnProperty('tail'));

// const animals = [
//   {
//     name: 'Persyk',
//     type: 'cat',
//     owner: 'Galya',
//   },
//   {
//     name: 'Margosha',
//     type: 'cat',
//     owner: 'Galya',
//   },
//   {
//     name: 'Teddi',
//     type: 'dog',
//     owner: 'Natasha',
//   },
// ];
// for (const animal of animals) {
//   console.log(`${animal.name} is ${animal.owner}'s ${animal.type}`);
// }

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };
// const third = { ...first, ...second };
// console.log(third);
// const fourth = { ...second, ...first, probE: 100 };
// console.log(fourth);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   public: true,
//   rating: 8.38,
// };
// // Деструктуризируем
// const { title, author, public, rating, coverImage, pages = 100 } = book;
// console.log(coverImage);
// console.log(pages);
// const accessType = public ? 'публичном' : 'закрытом';
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
// console.log(message);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   const productNames = [];
//   for (const product of products) {
//     productNames.push(product[propName]);
//   }
//   console.log(productNames);
//   return productNames;
// }
// getAllPropValues('category);

//  41/41
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let potionIndex = -1;
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         potionIndex = i;
//       }
//     }

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     let potionIndex = -1;
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         potionIndex = i;
//       }
//     }

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions[potionIndex].name = newName;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'mimimim'));
// console.log(atTheOldToad.getPotions());

// const playlist = {
//   name: 'Favourite',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
//   quantity: 4,
// };
// console.log(playlist.name);
// console.log(playlist['quantity']);
// const property = 'tracks';
// console.log(playlist[property]);
