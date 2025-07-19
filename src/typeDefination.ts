// bun --watch src/typeDefination.ts ile calistir

//basics types -> string, number, boolean, null, undefined, object
let val: string = 'Hello, TypeScript!';

val = 'TypeScript is great!';
let num: number = 42;
let isDone: boolean = true;
let notDefined: undefined = undefined;
let anyValue: any = 'This can be anything';
let nothing: null = null;
let arr: [] = []; // empty array
let val2 = {}; // empty object

console.log('TYPE:', `(${typeof val})`, val); // string
console.log('TYPE:', `(${typeof num})`, num); // number
console.log('TYPE:', `(${typeof isDone})`, isDone); // boolean
console.log('TYPE:', `(${typeof notDefined})`, notDefined); // undefined
console.log('TYPE:', `(${typeof anyValue})`, anyValue); // string
console.log('TYPE:', `(${typeof nothing})`, nothing); // object (null is a special case)
console.log('TYPE:', `(${typeof arr})`, arr); // object (arrays are also objects in JavaScript)
console.log('TYPE:', `(${typeof val2})`, val2); // object (empty object)

//types -> any, unknown
let anyType: any = 'This can be anything';
console.log('TYPE: anyType', `(${typeof anyType})`, anyType);
anyType = 42; // can be reassigned to any type
console.log('TYPE: anyType', `(${typeof anyType})`, anyType);
anyType = true; // can be reassigned to any type
console.log('TYPE: anyType', `(${typeof anyType})`, anyType);

let unknownType: unknown = 'This can be anything';
console.log('TYPE: unknownType', `(${typeof unknownType})`, unknownType);
unknownType = 42; // can be reassigned to any type
console.log('TYPE: unknownType', `(${typeof unknownType})`, unknownType);
unknownType = true; // can be reassigned to any type
console.log('TYPE: unknownType', `(${typeof unknownType})`, unknownType);

//union types
let unionType: string | number = 'Hello';
console.log('TYPE: unionType', `(${typeof unionType})`, unionType);
unionType = 42; // can be either string or number
console.log('TYPE: unionType', `(${typeof unionType})`, unionType);

//literal types
let literalType: 'red' | 'green' | 'blue' = 'red';
console.log('TYPE: literalType', `(${typeof literalType})`, literalType);
// literalType = 'yellow'; // Error: Type '"yellow"' is not assignable to type '"red" | "green" | "blue"'.

//array types number[] == Array<number>
let arr2: string[]; //veya
let arr3: Array<string>; // string array

arr2 = ['test1', 'test2', 'test3'];
arr3 = ['test4', 'test5', 'test6'];
console.log('TYPE: arr2', `(${typeof arr2})`, arr2);
console.log('TYPE: arr3', `(${typeof arr3})`, arr3);

//interface - type

interface IProps {
  name: string;
  age: number;
  state?: boolean;
}

// type IProps = {
//   name: string;
//   age: number;
// };

let obj: IProps = {
  name: 'John',
  age: 30,
};

console.log(typeof obj); // object

// array of objects

let arr4: IProps[] = [
  {
    name: 'Alice',
    age: 25,
  },
  {
    name: 'Bob',
    age: 28,
  },
];

//veya

let arr5: { name: string; age: number }[] = [
  {
    name: 'Alice',
    age: 25,
  },
  {
    name: 'Bob',
    age: 28,
  },
];

console.log('TYPE: arr4', `(${typeof arr4})`, arr4);

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

// String ve number karışımı union tipi
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
  price?: number; // Opsiyonel özellik
};

let products: Product[] = [
  { id: 1, title: 'Laptop', price: 1000 },
  { id: 2, title: 'Phone', price: 500 },
  { id: 3, title: 'Tablet' }, // price opsiyonel
];

//Tuple (sira ve uzunluk esikt olmali)

let arr6: [number, string, boolean];

arr6 = [1, 'teset2', true];

// union array (esnek uzunluk sira)
let mixedArray: (number | string | boolean)[] = [1, 'test2', true];

// Tuple - Kesin sıra ve uzunluk
let tupleArray: [number, string, boolean] = [1, 'test2', true];
// tupleArray = [true, 1, 'test']; // ❌ Hata: Sıra yanlış
// tupleArray = [1, 'test2'];      // ❌ Hata: Eksik eleman

// function

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(3, 4));

const add2 = (a: number, b: number): number => {
  return a + b;
};
console.log(add2(3, 4));

const add3 = ({ a, b }: { a: number; b: number }): number => {
  return a + b;
};
console.log('INLINE', add3({ a: 3, b: 4 }));

interface IAddParams {
  a: number;
  b: number;
}

const add4 = ({ a, b }: IAddParams): number => {
  return a + b;
};
console.log('INTERFACE', add4({ a: 3, b: 4 }));

const add5 = (...rest: number[]): number => {
  let sum = 0;
  rest.forEach((element) => (sum += element));

  return sum;
};

console.log(add5(6, 2, 3, 4, 5));

const add6 = (...rest: number[]): number => {
  let sum = 0;

  for (let i = 0; i < rest.length; i++) {
    sum += rest[i];
  }
  return sum;
};
console.log(add6(6, 2, 3, 4, 5));

//readonly

interface Iprops {
  readonly name: string;
  age: number;
}

let obj2: Iprops = {
  name: 'test',
  age: 20,
};
// obj2.name = 'test2'; // readonly degisken onune atadiginda atama yapamazsin
console.log(obj2);

//generic types

type ArrProps<T> = {
  name: T;
};

let arr7: ArrProps<string>[] = [
  {
    name: 'test',
  },
];

let arr8: ArrProps<number>[] = [
  {
    name: 10,
  },
];
let arr9: ArrProps<boolean>[] = [
  {
    name: true,
  },
];

// Geleneksel tek harf isimleri
//type Container<T> = { value: T };              // T = Type
//type Dictionary<K, V> = { [key: K]: V };       // K = Key, V = Value
//type EventHandler<E> = (event: E) => void;     // E = Event
//type Component<P> = (props: P) => JSX.Element; // P = Props

// ! key of kavrami (anlamadim arastir)

type ITest = {
  a: string;
  b: string;
  c: string;
};

type ITest2 = keyof ITest;

// ! mapped types (anlamadim arastir)
type Properties = 'a' | 'b' | 'c';

type newType = {
  [P in Properties]: number;
};

type newType2 = {
  a: number;
  b: number;
  c: number;
};

//extended types

interface IProperties {
  id?: number;
  name?: string;
  bio?: string;
}

interface IProperties2 extends IProperties {
  color: string;
}

let obj3: IProperties2 = {
  id: 1,
  name: 'Levent',
  bio: 'yok',
  color: 'red',
};
// Utilty types
// https://www.typescriptlang.org/docs/handbook/utility-types.html

//Partial
interface IUser2 {
  id: number;
  name: string;
  age: number;
}

const obj4: Partial<IUser2> = {
  name: 'Levent',
};

//Required
interface IUser3 {
  id: number;
  name: string;
  age: number;
}

const obj5: Required<IUser3> = {
  id: 2,
  name: 'Levent',
  age: 18,
};

//Readonly

interface IUser4 {
  id: number;
  name: string;
  age: number;
}

const obj6: Readonly<IUser4> = {
  id: 2,
  name: 'Levent',
  age: 18,
};

//obj6.name = 'Levent2'; //Cannot assign to 'name' because it is a read-only property.

//Pick

interface IUser5 {
  id: number;
  name: string;
  age: number;
}

const obj7: Pick<IUser5, 'name' | 'age'> = {
  //id: 2,
  name: 'Levent',
  age: 18,
};

//Omit

interface IUser6 {
  id: number;
  name: string;
  age: number;
}

const obj8: Omit<IUser6, 'id'> = {
  //id: 2,
  name: 'Levent',
  age: 18,
};
