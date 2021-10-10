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

// const inputName = 'color';
// const inputValue = 'tomato';
// const colorPickerData = {
//   [inputName]: inputValue,
// };
// console.log(colorPickerData);

// console.log([1, 2] === [1, 2]);
// const a = { x: 10, y: 3 };
// const b = a;
// console.log(a === b);
// a.x = 20;
// b.y = 30;
// console.log(a);
// console.log(b);

// const something = {
//   array: [],
//   transaction(amount, type) {
//     this.array.push({ amount, type, id: this.array.length + 1 });
//   },
// };
// something.transaction(50, 'add');
// something.transaction(100, 'add');
// console.log(something);

// const numbers = [1, 2, 3].concat([4, 5, 6], [12, 13, 14]);
// const numbers = [...[0, 5], 999, ...[1, 2, 3], ...[12, 21]];
// console.log(numbers);

// const temp = [32, 6, 23, 7, 1, 456, 44];
// console.log(Math.max(...temp));
// console.log(Math.max(temp));
// const temp2 = [...temp];
// console.log(temp === temp2);
// temp2[1] = 666666;
// console.log(temp);
// console.log(temp2);

// const t1 = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const t2 = [...t1];
// t1[2].y = 111111;
// console.log(t2[2].y);
// console.log(t1 === t2);

// const a = { x: 1, y: 2, z: 3 };
// const b = { x: 1, y: 2, z: 4 };
// const c = { x: 4, y: 3, z: 2 };
// console.log({ ...a, ...b, ...c });
// console.log({ ...b, ...c, ...a });
// console.log({ ...c, ...a, ...b });

// const a = { x: 1, y: 2, z: 3 };
// const { z } = a;
// console.log(z);

// const a = [1, 2, 3, 4, 5, 6, 7, 8];
// const b = a;
// a[0] = 1000000000;
// console.log(b[0]);
// const [g, h, j, k, l, m, , o, p] = b;
// console.log(g, h, j, k, l, m, o, p); // без 7

// const profile = {
//   name: 'Kuzya',
//   city: 'Kwinslend',
//   profesion: 'klerk',
//   age: '88',
//   stats: { a: 1, b: 2, c: 3 },
// };
// const { name, age, ...other } = profile;
// console.log(name, age, other);

// const sum = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];
// console.log(sum[1][1]);

// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }
// registerGuest('Манго', greet);

// registerGuest('Поли', function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//   }
// }
// processCall('Манго');

// function processCall(recipient, onAvailable, onNotAvailable) {
//   const isRecipientAvailable = Math.random() > 0.5;
//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }
//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);

// function printValue(value) {
//   console.log(value);
// }
// function prettyPrint(value) {
//   console.log('Login value: ', value);
// }
// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }
// repeat(5, printValue);
// repeat(5, prettyPrint);

// const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// numbers.forEach(function (element, index, array) {
//   console.log(`The index is: ${index}, the valule is: ${element}`);
//   let a = 0;
//   a = element + array[index] + index;
//   console.log(a);
// });

// const a = (x, y, z) => x + y + z;
// console.log(a(1, 2, 3));
// const greet = () => {
//   console.log('Привет!');
// };
// greet();

// const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// numbers.forEach((number, index) => {
//   console.log(index, '+', number);
// });
// const msg = (number, index) => {
//   console.log(`${number}'s index is ${index}`);
// };
// numbers.forEach(msg);

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 1 && value < 4);
// console.log(filteredNumbers);

// const array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const newArray = array.map(arrEl => arrEl / 10);
// console.log(newArray);
// console.log(array);

// const obj = [
//   { a: 1, b: [1, 2] },
//   { a: 2, b: [3, 4] },
//   { a: 3, b: [5, 6] },
// ];
// const objA = obj.map(objEl => objEl.a);
// const objB = obj.flatMap(objEl => objEl.b);
// console.log(objA);
// console.log(objB);

// const values = [2, 4, -6, 0, 14, -23, 35, 2, 3, -78, -55, -6, 35, 2, 4, 17];
// const positiveValues = values.filter(value => value > 0);
// console.log(positiveValues);
// const uniqueValues = values.filter((value, index, array) => array.indexOf(value) === index);
// console.log(uniqueValues);

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];
// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best);
// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst);
// const average = students.filter(({ score }) => score >= LOW_SCORE && score < HIGH_SCORE);
// console.log(average);
// const bestOne = students.find(student => student.score > 90);
// console.log(bestOne);
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
// console.log(totalScore);

// const tweets = [
//   { id: '000', likes: 50, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 20, tags: ['html', 'css'] },
//   { id: '002', likes: 10, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 80, tags: ['css', 'react'] },
//   { id: '004', likes: 40, tags: ['js', 'nodejs', 'react'] },
// ];

// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes);

// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };
// console.log(countLikes(tweets));

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//   return allTags;
// }, []);
// console.log(tags);

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
//   }, []);
// const tags = getTags(tweets);
// console.log(tags);

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }
//   acc[tag] += 1;
//   return acc;
// };
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();
// console.log(scores);
// console.log(ascendingScores);

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score,
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score,
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name),
// );

// function foo(i) {
//   if (i < 0) return;
//   console.log('begin: ' + i);
//   foo(i - 1);
//   console.log('end: ' + i);
// }
// a = foo(3);

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });
//   return totalPrice;
// }

// const a = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };
// console.log(getUsersWithFriend(a, 'Briana Decker'));

// const getFriends = users => {
//   const allFriends = users.flatMap(user => user.friends);
//   console.log(allFriends);
//   return (uniqueFriends = allFriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index,
//   ));
// };

// console.log(getFriends(a));

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);

// const firstArray = [26, 94, 36, 18];
// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// console.log(eachElementInFirstIsEven);

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);

// const getTotalFriendCount = users => {
//   return users.reduce((total, user) => {
//     return total + user.friends.length;
//   }, 0);
// };
// console.log(getTotalFriendCount(a));

// const sortByDescendingFriendCount = users => {
//   return [...users].sort((u1, u2) => u2.friends.length - u1.friends.length);
// };

// console.log(sortByDescendingFriendCount(a));
// console.log(a);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .sort((b1, b2) => b1.author.localeCompare(b2.author))
//   .map(book => book.author);
// console.log(names);

// const getNamesSortedByFriendCount = users => {
//   return [...users].sort((u1, u2) => u1.friends.length - u2.friends.length).map(user => user.name);
// };
// console.log(getNamesSortedByFriendCount(a));
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter(user => user.gender === gender)
//     .map(user => user.balance)
//     .reduce((total, nums) => {
//       return (total += nums);
//     }, 0);
// };
// console.log(getTotalBalanceByGender(a, 'female'));

// function createProduct(obj, callback) {
//   const newObj = { ...obj, id: Date.now() };
//   callback(newObj);
// }
// function logProduct(product) {
//   console.log(product);
//   console.log(this);
// }
// createProduct({ a: 'qweqw', b: 234, c: true }, logProduct);

//  ---------------- !!! -------------  Lodash  ----- !!! ------

// console.log(_);
// console.dir(_);
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const b = [];
// console.log(_.isEmpty(a));
// console.log(_.isEmpty(b));
// console.log(_.isEmpty({ a: 1, b: 2 }));
// console.log(_.isEmpty({}));

// const user = {
//   name: 'Galya',
//   location: {
//     city: 'Budva',
//     country: 'Montenegro',
//     coordinates: [1, 2],
//   },
// };
// console.log(_.get(user, 'location.city'));
// console.log(user?.location?.country);
// console.log('not existing property', user?.location?.street);

// console.log(_.union([1, 2, 3, 4, 5, 6], [21, 3, 45, 6, 333]));
// console.log(_.range(1, 10));
// console.log(_.range(-21, -13));
// console.log(_.range(-20, 20, 5));

// const players = [
//   { name: 'Alex', age: 21, score: 10 },
//   { name: 'Bob', age: 32, score: 20 },
//   { name: 'Anton', age: 18, score: 10 },
//   { name: 'Albert', age: 42, score: 10 },
//   { name: 'Stephan', age: 12, score: 30 },
//   { name: 'Alex', age: 16, score: 10 },
//   { name: 'Bob', age: 39, score: 10 },
//   { name: 'Bob', age: 13, score: 50 },
// ];
// console.log(_.sortBy(players, player => player.age));
// console.log(_.sortBy(players, ['name', 'age']));
// console.log(_.sumBy(players, player => player.score));
// console.log(_.uniq([21, 3, 45, 6, 7, 21, 88, 6, 123, 144]));
// console.log(_.min([22, 4, 56, -3, 234, 1]));
// console.log(_.minBy(players, player => player.age));
// console.log(_.maxBy(players, player => player.score));

// console.log(_.camelCase('--- fd GfgsFFFF-sdfs-'));
// console.log(_.camelCase('dsdfs kkjljlkj ahvsgvh'));
// console.log(_.camelCase('ddd+fff+rer+h'));

// console.log(_.kebabCase(' s d f g kjlkjl'));

// console.log(_.capitalize('ada kjjkhio Gadsfjoi'));
// console.log(_.lowerCase('ada kjjkhio Gadsfjoi'));
// console.log(_.upperCase('ada kjjkhio Gadsfjoi'));

//  ---------------- !!! -------------  Lodash practice finished ----- !!! ------

// function foo() {
//   console.log(this);
// }
// foo();

// const petya = {
//   username: 'Petya',
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };
// petya.showThis();
// petya.showName();

// function showThis() {
//   console.log('this in showThis: ', this);
// }
// showThis();

// const someone = {
//   username: 'Mango',
// };
// someone.showContext = showThis;
// someone.showContext();
// console.log(someone);

// const showThisArrow = () => {
//   console.log('this in showThis: ', this);
// };
// showThisArrow();
// someone.showContextArrow = showThisArrow;
// someone.showContextArrow();

// const hotel = {
//   username: 'Resort hotel',
//   objectThis() {
//     console.log('this in objectThis: ', this);
//   },
//   showThis() {
//     const foo = () => {
//       console.log('this in foo: ', this);
//     };

//     foo();
//   },
// };
// hotel.objectThis();
// hotel.showThis('asd');

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }
// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Поли',
// };
// greetGuest.call(mango, 'Добро пожаловать');
// greetGuest.call(poly, 'С приездом');

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
//   console.log(greeting[0]);
// }
// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Поли',
// };
// greetGuest.apply(mango, [1, 2]);
// greetGuest.apply(poly, ['С приездом']);

// function greetT(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }
// const steam = {
//   service: 'Steam',
// };
// const steamGreeter = greetT.bind(steam);
// console.log(steamGreeter('Манго'));
// const gmail = {
//   service: 'Gmail',
// };
// const gmailGreeter = greetT.bind(gmail);
// console.log(gmailGreeter('Поли'));

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// function makeMessage(callback) {
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }
// makeMessage(customer.getFullName.bind(customer));

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> ', this);
//     this.color = color;
//   };

//   return changeColor;
// };
// const updateColor = makeChangeColor();
// const sweater = {
//   color: 'teal',
//   size: 'M',
//   material: 'coton',
//   available: true,
//   gendeg: 'unisex',
// };
// sweater.updateColor = updateColor;
// console.log(sweater);
// sweater.updateColor('orange');
// console.log(sweater);

// const showThis = function (x, y, z) {
//   console.log('Show this -> ', this);
//   console.log(x);
//   console.log(y);
//   console.log(z);
// };
// console.log(showThis);
// console.dir(showThis);
// showThis();
// const obj = { a: 100, b: 500 };
// showThis.call(obj, 10, 20, 30);
// console.log(obj);

// const showThis = function (x, y, z) {
//   console.log('Show this -> ', this);
//   console.log(x, y, z);
// };
// const obj = { a: 100, b: 500 };
// const qwe = [10, 20, 30];
// showThis.apply(obj, qwe);

// ------------------ !!! -------------- CALL, APPLY, BIND -------------------------
// const changeColor = function (color) {
//   this.color = color;
// };
// const hat = { name: 'hat', color: 'green' };
// const dress = { name: 'dress', color: 'red' };
// changeColor.call(hat, 'pink');
// changeColor.apply(dress, ['coral']);
// console.log(hat);
// console.log(dress);

// const changeHatColor = changeColor.bind(hat);
// const changeDressColor = changeColor.bind(dress);
// changeHatColor('light green');
// changeDressColor('dark green');
// console.log(hat);
// console.log(dress);

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// console.log(dog);
// console.log(dog.legs);
// dog.name = 'Teddy';
// console.log(dog);
// console.log(animal.isPrototypeOf(dog));
// console.log(dog.hasOwnProperty('name'));
// console.log(dog.hasOwnProperty('legs'));
// console.log(dog.hasOwnProperty('someProperty'));

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }
// const galya = new User('Galya', 'li.sa.vectorart@gmail.com');
// console.log(galya);
// console.log(galya.hasOwnProperty('name'));

// class UserFromObj {
//   name;
//   #email;
//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }
//   getEmail() {
//     ret

//   changeEmail(newEmail) {
//     return (this.#email = newEmail);
//   }
// }
// const someone = new UserFromObj({ name: 'Slavik', email: 'slavik.a@gmail.com' });
// console.log(someone.getEmail());
// someone.getEmail();
// someone.changeEmail('slavik.a@ukr.net');
// console.log(someone.getEmail());

// class User {
//   static Roles = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };
//   static #takenEmails = [];
//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #role;
//   #email;
//   constructor({ name, email, role }) {
//     this.name = name;
//     this.#email = email;
//     this.#role = role;
//     User.#takenEmails.push(email);
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     if (newEmail === '') {
//       console.error('Ошибка! Почта не может быть пустой строкой!');
//       return;
//     }
//     this.#email = newEmail;
//   }
//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }
// const mango = new User({ name: 'Манго', email: 'mango@mail.com', role: User.Roles.ADMIN });
// console.log(mango.email);
// mango.email = '';
// console.log(mango.email);
// console.log(mango.Roles);
// console.log(User.Roles);
// console.log(mango.role);
// mango.role = User.Roles.EDITOR;
// console.log(mango.role);
// console.log(User.isEmailTaken('poly@mail.com'));
// console.log(User.isEmailTaken('mango@mail.com'));
// mango.email = 'mango2@mail.com';
// console.log(User.isEmailTaken('mango@mail.com')); //set email should be changed to remove old one and add new to #takenEmails

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get theEmail() {
//     return this.email;
//   }

//   set theEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тело класса ContentEditor
// }

// const editor = new ContentEditor('mango@mail.com');
// console.log(editor.email);
// editor.theEmail = 'some@email.com';
// console.log(editor.theEmail);
// console.log(editor.email);

// class User {
//   constructor(mail) {
//     this.mail = mail;
//   }

//   get eMail() {
//     return this.mail;
//   }

//   set eMail(newEmail) {
//     this.mail = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ mail, posts }) {
//     super(mail);
//     this.posts = posts;
//   }
//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ mail: 'mango@mail.com', posts: [] });
// editor.mail = 'adasd';
// editor.eMail = 'asdasda';
// console.log(editor.mail);
// console.log(editor.eMail);
// editor.addPost('post-1');
// console.log(editor);

// const objA = {
//   x: 15,
// };
// const objB = Object.create(objA);
// objB.y = 30;
// const objC = Object.create(objB);
// objC.z = 100;
// objC.x = 500;
// objB.y = 200;
// console.table('ObjA', objA);
// console.table('ObjB', objB);
// console.table('ObjC', objC);
// console.log(objB.y);
// console.log(objA.x);
// console.log(objB.x);
// console.log(objC.x);

// const Car = function (value) {
//   console.log(this);
//   this.a = value;
// };
// const myCar = new Car(5);
// console.log(myCar);

// class Blogger {
//   constructor({ email = ' ', age = 0, numberOfPosts = 0, topics = [] }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `Blogger ${this.email}`;
//   }
// }

// const kuzya = new Blogger({
//   email: 'Kuzya',
//   age: 13,
//   numberOfPosts: 21,
//   topics: ['t1', 't2', 't3', 't4'],
// });
// console.log(kuzya.getInfo);

// console.log(kuzya);
// const nafanya = new Blogger({});
// console.log(nafanya);

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listAllItems = list.childNodes;
// console.log(listAllItems);

// const listItems = list.children;
// console.log(listItems);

const newColor = document.querySelector('.js-decrement');
console.log(newColor);
newColor.style.backgroundColor = 'orange';

const article = document.querySelector('.article');
console.log(article.innerHTML);

const title = document.querySelector('.article .title');
console.log(title.innerHTML);

const text = document.querySelector('.article .text');
console.log(text.innerHTML);

const link = document.querySelector('.article .link');
console.log(link.innerHTML);

article.innerHTML = '';

const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const list = document.querySelector('.list');
const markup = technologies.map(technology => `<li class="list-item">${technology}</li>`).join('');
console.log(markup);
list.innerHTML = markup;
list.innerHTML = '';
