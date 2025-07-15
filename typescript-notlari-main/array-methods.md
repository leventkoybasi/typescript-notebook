## 🔍 **Arama/Erişim Metodları**

```typescript
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];

// indexOf() - İlk eşleşen elemanın index'ini döndürür
console.log(fruits.indexOf('banana')); // 1

// includes() - Eleman var mı kontrol eder
console.log(fruits.includes('apple')); // true

// find() - Koşula uyan ilk elemanı döndürür
let found = numbers.find((x) => x > 3); // 4

// findIndex() - Koşula uyan ilk elemanın index'ini döndürür
let index = numbers.findIndex((x) => x > 3); // 3
```

## ➕ **Ekleme/Çıkarma Metodları**

```typescript
let items = ['a', 'b', 'c'];

// push() - Sona eleman ekler
items.push('d'); // ['a', 'b', 'c', 'd']

// pop() - Sondan eleman çıkarır
let last = items.pop(); // 'd', items: ['a', 'b', 'c']

// unshift() - Başa eleman ekler
items.unshift('z'); // ['z', 'a', 'b', 'c']

// shift() - Baştan eleman çıkarır
let first = items.shift(); // 'z', items: ['a', 'b', 'c']
```

## 🔄 **Dönüşüm Metodları**

```typescript
let numbers = [1, 2, 3, 4, 5];

// map() - Her elemanı dönüştürür, yeni array döndürür
let doubled = numbers.map((x) => x * 2); // [2, 4, 6, 8, 10]

// filter() - Koşula uyan elemanları filtreler
let evens = numbers.filter((x) => x % 2 === 0); // [2, 4]

// reduce() - Array'i tek değere indirger
let sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15

// join() - Array'i string'e çevirir
let text = fruits.join(', '); // "apple, banana, orange"
```

## 🔍 **Kontrol Metodları**

```typescript
let numbers = [2, 4, 6, 8];

// every() - Tüm elemanlar koşulu sağlıyor mu?
let allEven = numbers.every((x) => x % 2 === 0); // true

// some() - En az bir eleman koşulu sağlıyor mu?
let hasEven = numbers.some((x) => x % 2 === 0); // true

// forEach() - Her eleman için işlem yapar (void döndürür)
numbers.forEach((x) => console.log(x * 2));
```

## 📏 **Boyut/Düzen Metodları**

```typescript
let items = [3, 1, 4, 1, 5];

// length - Array uzunluğu
console.log(items.length); // 5

// sort() - Sıralar (orijinal array'i değiştirir)
items.sort(); // [1, 1, 3, 4, 5]

// reverse() - Ters çevirir
items.reverse(); // [5, 4, 3, 1, 1]

// slice() - Belirli kısmı keser (yeni array döndürür)
let portion = items.slice(1, 3); // [4, 3]
```

## 💡 **Pratik Örnek - Workspace'inizden İlham**

`typeDefination.ts` dosyanızdaki union type array'le:

```typescript
let scores: (string | number)[] = ['Programming', 5, 'Design', 4];

// Sadece number'ları al
let numericScores = scores.filter((x) => typeof x === 'number'); // [5, 4]

// String'leri büyük harfe çevir
let upperCaseSubjects = scores
  .filter((x) => typeof x === 'string')
  .map((x) => (x as string).toUpperCase()); // ['PROGRAMMING', 'DESIGN']
```

**En çok kullanılan:** `map()`, `filter()`, `forEach()`, `push()`, `pop()`, `includes()`, `find()`

Bu metodlar TypeScript'te tip güvenliği sağlar ve IntelliSense desteği verir! 🚀
