// let user = {
//   name: 'Tom',
//   age: 25,
// }

// object seklinde tip tanimlama
let user: { name: string; age: number } = {
  name: 'Tom',
  age: 25,
};
// type kullanarak tip tanimlama
type User = {
  name: string;
  age: number;
};

let user2: User = {
  name: 'Alice',
  age: 30,
};

let user3: User = {
  name: 'Bob',
  age: 28,
};
// interface kullanarak tip tanimlama
interface IUser {
  name: string;
  age: number;
}
let user4: IUser = {
  name: 'Charlie',
  age: 35,
};

// String ve number karışımı
let scores: (string | number)[] = ['Programming', 5, 'Design', 4];

// arraylarda tip tanimlama
let arrayName: string[] = ['John', 'Jane'];
let arrayNumber: number[] = [1, 2, 3];
let arrayName2: Array<string> = ['John', 'Jane'];
let arrayNumber2: Array<number> = [1, 2, 3];
// Interface ile
interface IUser {
  name: string;
  age: number;
}

let users: IUser[] = [
  { name: 'Tom', age: 25 },
  { name: 'Alice', age: 30 },
];
// Type ile
type Product = {
  id: number;
  title: string;
  price: number;
};

let products: Product[] = [
  { id: 1, title: 'Laptop', price: 1000 },
  { id: 2, title: 'Phone', price: 500 },
];
