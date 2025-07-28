import { Dir } from 'fs';

let id: number = 1;
let names: string = 'Levent';
let isActive: boolean = true;
let arr1: number[] = [1, 2, 3, 4, 5];
let arr10: string[] = ['Levent', 'Koybasi'];
let arr11: Array<string> = ['Levent', 'Koybasi'];
let arr12: (number | string)[] = [1, 'Levent', 2, 'Koybasi'];
let arr13: Array<number | string> = [1, 'Levent', 2, 'Koybasi'];
let person: [number, string, boolean] = [1, 'Levent', true]; //tuple
let employee: [number, string][]; //tuple array
employee = [
  [1, 'Levent'],
  [2, 'Koybasi'],
  [3, 'Software Engineer'],
  [4, 'TypeScript'],
  [5, 'JavaScript'],
];

let ids: string | number = 1; // union type
ids = 'Levent';
ids = 2; // string or number

enum Direction1 {
  up,
  down,
  left,
  right,
}

console.log(Direction1.down); // 1
console.log(Direction1.up); // 0
console.log(Direction1.left); // 2
//type
type User = {
  id: number;
  name: string;
  isActive: boolean;
};
const user: User = {
  id: 1,
  name: 'Levent',
  isActive: true,
};
//interface
interface IUser1 {
  id: number;
  name: string;
  isActive: boolean;
}
const user1: IUser1 = {
  id: 1,
  name: 'Levent',
  isActive: true,
};

function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2)); // 3

//generics type kolay ornek (Burda genel olark Type yerine T kullanilir)
// https://www.youtube.com/watch?v=XnOHnL_jSeY

function getData<Type>(params: Type): Type {
  return params;
}
console.log(getData<string>('Levent')); // Levent
console.log(getData<number>(1)); // 1
console.log(getData<boolean>(true)); // true
console.log(getData<boolean>(true)); // true
console.log(getData<Array<string>>(['a', 'b', 'c'])); // ['a', 'b', 'c']

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3]);

let strArray = getArray<string>(['Levent', 'Koybasi']);
strArray.push('TypeScript');
console.log(strArray); // ['Levent', 'Koybasi', 'TypeScript
numArray.push(4);
console.log(numArray); // [1, 2, 3, 4]
