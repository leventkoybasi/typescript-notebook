# TypeScript Çalışma Notları

## 📚 Array Metodları ve JavaScript Yöntemleri

### 🔍 **Array Arama Metodları**

```typescript
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// indexOf() - İlk eşleşen elemanın index'ini döndürür
let appleIndex = fruits.indexOf('apple'); // 0
let notFoundIndex = fruits.indexOf('mango'); // -1

// includes() - Eleman var mı kontrol eder
let hasApple = fruits.includes('apple'); // true
let hasMango = fruits.includes('mango'); // false

// find() - Koşula uyan ilk elemanı döndürür
let foundFruit = fruits.find((fruit) => fruit === 'apple'); // 'apple'
let foundNumber = numbers.find((num) => num > 5); // 6
let notFound = fruits.find((fruit) => fruit === 'mango'); // undefined

// findIndex() - Koşula uyan ilk elemanın index'ini döndürür
let foundIndex = fruits.findIndex((fruit) => fruit === 'apple'); // 0
let notFoundIdx = fruits.findIndex((fruit) => fruit === 'mango'); // -1

// some() - En az bir eleman koşulu sağlıyor mu?
let hasLongFruit = fruits.some((fruit) => fruit.length > 6); // false
let hasEvenNumber = numbers.some((num) => num % 2 === 0); // true

// every() - Tüm elemanlar koşulu sağlıyor mu?
let allStrings = fruits.every((fruit) => typeof fruit === 'string'); // true
let allEven = numbers.every((num) => num % 2 === 0); // false
```

### 🔄 **Array Dönüşüm Metodları**

```typescript
let fruits = ['apple', 'banana', 'orange'];
let numbers = [1, 2, 3, 4, 5];

// map() - Her elemanı dönüştürür, yeni array döndürür
let upperFruits = fruits.map((fruit) => fruit.toUpperCase()); // ['APPLE', 'BANANA', 'ORANGE']
let doubled = numbers.map((num) => num * 2); // [2, 4, 6, 8, 10]
let lengths = fruits.map((fruit) => fruit.length); // [5, 6, 6]

// filter() - Koşula uyan elemanları filtreler
let longFruits = fruits.filter((fruit) => fruit.length > 5); // ['banana', 'orange']
let evenNumbers = numbers.filter((num) => num % 2 === 0); // [2, 4]
let shortFruits = fruits.filter((fruit) => fruit.length <= 5); // ['apple']

// reduce() - Array'i tek değere indirger
let sum = numbers.reduce((acc, num) => acc + num, 0); // 15
let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0); // 17
let concatenated = fruits.reduce((acc, fruit) => acc + fruit, ''); // 'applebananaorange'

// flatMap() - Map + flatten işlemi
let words = ['hello world', 'typescript rocks'];
let allWords = words.flatMap((str) => str.split(' ')); // ['hello', 'world', 'typescript', 'rocks']
```

### ➕➖ **Array Ekleme/Çıkarma Metodları**

```typescript
let fruits = ['apple', 'banana'];

// push() - Sona eleman ekler, yeni uzunluğu döndürür
let newLength = fruits.push('orange'); // 3, fruits: ['apple', 'banana', 'orange']
fruits.push('grape', 'kiwi'); // fruits: ['apple', 'banana', 'orange', 'grape', 'kiwi']

// pop() - Sondan eleman çıkarır, çıkardığı elemanı döndürür
let lastFruit = fruits.pop(); // 'kiwi', fruits: ['apple', 'banana', 'orange', 'grape']

// unshift() - Başa eleman ekler, yeni uzunluğu döndürür
let newLen = fruits.unshift('mango'); // 5, fruits: ['mango', 'apple', 'banana', 'orange', 'grape']

// shift() - Baştan eleman çıkarır, çıkardığı elemanı döndürür
let firstFruit = fruits.shift(); // 'mango', fruits: ['apple', 'banana', 'orange', 'grape']

// splice() - Belirtilen pozisyondan eleman ekler/çıkarır
fruits.splice(1, 1, 'watermelon'); // fruits: ['apple', 'watermelon', 'orange', 'grape']
let removed = fruits.splice(2, 2); // ['orange', 'grape'], fruits: ['apple', 'watermelon']
```

### 📏 **Array Düzenleme Metodları**

```typescript
let numbers = [3, 1, 4, 1, 5, 9, 2, 6];
let fruits = ['banana', 'apple', 'cherry'];

// sort() - Sıralar (orijinal array'i değiştirir)
numbers.sort(); // [1, 1, 2, 3, 4, 5, 6, 9]
fruits.sort(); // ['apple', 'banana', 'cherry']

// Sayıları düzgün sıralamak için compare function
numbers.sort((a, b) => a - b); // [1, 1, 2, 3, 4, 5, 6, 9] (artan)
numbers.sort((a, b) => b - a); // [9, 6, 5, 4, 3, 2, 1, 1] (azalan)

// reverse() - Ters çevirir (orijinal array'i değiştirir)
fruits.reverse(); // ['cherry', 'banana', 'apple']

// slice() - Belirli kısmı keser (yeni array döndürür)
let portion = numbers.slice(2, 5); // [5, 4, 3] (index 2-4 arası)
let lastTwo = fruits.slice(-2); // ['banana', 'apple'] (son 2 eleman)

// concat() - Array'leri birleştirir (yeni array döndürür)
let moreFruits = ['grape', 'kiwi'];
let allFruits = fruits.concat(moreFruits); // ['cherry', 'banana', 'apple', 'grape', 'kiwi']
```

### 🔄 **Array Iterator Metodları**

```typescript
let fruits = ['apple', 'banana', 'orange'];

// forEach() - Her eleman için işlem yapar (void döndürür)
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// 0: apple
// 1: banana
// 2: orange

// entries() - Key-value çiftlerini döndürür
for (let [index, fruit] of fruits.entries()) {
  console.log(`${index}: ${fruit}`);
}

// keys() - Index'leri döndürür
for (let index of fruits.keys()) {
  console.log(index); // 0, 1, 2
}

// values() - Değerleri döndürür
for (let fruit of fruits.values()) {
  console.log(fruit); // apple, banana, orange
}
```

### 🔗 **Array Birleştirme ve String Dönüşüm**

```typescript
let fruits = ['apple', 'banana', 'orange'];
let numbers = [1, 2, 3, 4, 5];

// join() - Array'i string'e çevirir
let fruitString = fruits.join(', '); // 'apple, banana, orange'
let numberString = numbers.join(' - '); // '1 - 2 - 3 - 4 - 5'
let simpleJoin = fruits.join(); // 'apple,banana,orange'

// toString() - Array'i string'e çevirir (virgülle ayırır)
let fruitStr = fruits.toString(); // 'apple,banana,orange'
```

### 📊 **Object Metodları**

```typescript
// Object.keys() - Object'in key'lerini array olarak döndürür
let user = { name: 'John', age: 30, city: 'Istanbul' };
let keys = Object.keys(user); // ['name', 'age', 'city']

// Object.values() - Object'in value'larını array olarak döndürür
let values = Object.values(user); // ['John', 30, 'Istanbul']

// Object.entries() - Key-value çiftlerini array olarak döndürür
let entries = Object.entries(user); // [['name', 'John'], ['age', 30], ['city', 'Istanbul']]

// Object.assign() - Object'leri birleştirir
let additionalInfo = { job: 'Developer', salary: 5000 };
let fullUser = Object.assign({}, user, additionalInfo); // { name: 'John', age: 30, city: 'Istanbul', job: 'Developer', salary: 5000 }

// Object.hasOwnProperty() - Property varlığını kontrol eder
let hasName = user.hasOwnProperty('name'); // true
let hasEmail = user.hasOwnProperty('email'); // false
```

### 🎯 **String Metodları**

```typescript
let text = 'TypeScript is awesome';
let name = '  John Doe  ';

// String arama metodları
let index = text.indexOf('Script'); // 4
let lastIndex = text.lastIndexOf('e'); // 16
let includes = text.includes('awesome'); // true
let startsWith = text.startsWith('Type'); // true
let endsWith = text.endsWith('awesome'); // true

// String dönüşüm metodları
let upper = text.toUpperCase(); // 'TYPESCRIPT IS AWESOME'
let lower = text.toLowerCase(); // 'typescript is awesome'
let trimmed = name.trim(); // 'John Doe'
let replaced = text.replace('awesome', 'great'); // 'TypeScript is great'

// String kesme metodları
let substring = text.substring(0, 10); // 'TypeScript'
let slice = text.slice(0, 10); // 'TypeScript'
let split = text.split(' '); // ['TypeScript', 'is', 'awesome']
```

### 🔢 **Math Metodları**

```typescript
let numbers = [10, 5, 8, 1, 15, 3];

// Math.max() - En büyük değer
let max = Math.max(...numbers); // 15
let maxValue = Math.max(10, 20, 5, 25); // 25

// Math.min() - En küçük değer
let min = Math.min(...numbers); // 1
let minValue = Math.min(10, 20, 5, 25); // 5

// Math.round() - Yuvarlar
let rounded = Math.round(4.7); // 5
let rounded2 = Math.round(4.3); // 4

// Math.floor() - Aşağı yuvarlar
let floored = Math.floor(4.9); // 4

// Math.ceil() - Yukarı yuvarlar
let ceiled = Math.ceil(4.1); // 5

// Math.random() - 0-1 arası rastgele sayı
let random = Math.random(); // 0.123456...
let randomInt = Math.floor(Math.random() * 10); // 0-9 arası integer
```

### ⏰ **Date Metodları**

```typescript
let now = new Date();
let specificDate = new Date('2023-12-25');

// Date getter metodları
let year = now.getFullYear(); // 2023
let month = now.getMonth(); // 0-11 (Ocak=0)
let day = now.getDate(); // 1-31
let hours = now.getHours(); // 0-23
let minutes = now.getMinutes(); // 0-59

// Date setter metodları
now.setFullYear(2024);
now.setMonth(11); // Aralık
now.setDate(25);

// Date formatting
let dateString = now.toDateString(); // 'Mon Dec 25 2023'
let timeString = now.toTimeString(); // '10:30:45 GMT+0300'
let isoString = now.toISOString(); // '2023-12-25T07:30:45.123Z'
```

### 🎨 **JSON Metodları**

```typescript
// JSON.stringify() - Object'i JSON string'e çevirir
let user = { name: 'John', age: 30, active: true };
let jsonString = JSON.stringify(user); // '{"name":"John","age":30,"active":true}'

// JSON.parse() - JSON string'i Object'e çevirir
let parsedUser = JSON.parse(jsonString); // { name: 'John', age: 30, active: true }

// Güzel formatlama için
let prettyJson = JSON.stringify(user, null, 2);
/* 
{
  "name": "John",
  "age": 30,
  "active": true
}
*/
```

### 🔄 **Type Guards ve Tip Kontrolleri**

```typescript
// typeof - Primitive tip kontrolü
let value: any = 'Hello';
if (typeof value === 'string') {
  console.log(value.toUpperCase()); // String metodları kullanılabilir
}

// instanceof - Object tip kontrolü
let date = new Date();
if (date instanceof Date) {
  console.log(date.getFullYear()); // Date metodları kullanılabilir
}

// Array.isArray() - Array kontrolü
let data: any = [1, 2, 3];
if (Array.isArray(data)) {
  console.log(data.map((x) => x * 2)); // Array metodları kullanılabilir
}

// in operatörü - Property kontrolü
let obj: any = { name: 'John', age: 30 };
if ('name' in obj) {
  console.log(obj.name); // Property güvenli erişim
}
```

### 🚀 **Gelişmiş Array İşlemleri**

```typescript
// Array chain operations - Metod zincirleme
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = numbers
  .filter((num) => num % 2 === 0) // Çift sayıları al
  .map((num) => num * 2) // İkiye katla
  .reduce((sum, num) => sum + num, 0); // Topla
// Result: 60

// Nested array operations
let users = [
  { name: 'John', hobbies: ['reading', 'gaming'] },
  { name: 'Jane', hobbies: ['cooking', 'traveling'] },
  { name: 'Bob', hobbies: ['reading', 'sports'] },
];

let allHobbies = users
  .flatMap((user) => user.hobbies) // Tüm hobi array'lerini birleştir
  .filter((hobby, index, arr) => arr.indexOf(hobby) === index); // Duplicateları kaldır
// ['reading', 'gaming', 'cooking', 'traveling', 'sports']

// Groupby operations (manual implementation)
let grouped = users.reduce((acc, user) => {
  user.hobbies.forEach((hobby) => {
    if (!acc[hobby]) acc[hobby] = [];
    acc[hobby].push(user.name);
  });
  return acc;
}, {} as Record<string, string[]>);
// { reading: ['John', 'Bob'], gaming: ['John'], cooking: ['Jane'], traveling: ['Jane'], sports: ['Bob'] }
```

### 💡 **Pratik İpuçları**

```typescript
// 1. Optional chaining ile güvenli erişim
let user: any = { profile: { settings: { theme: 'dark' } } };
let theme = user?.profile?.settings?.theme ?? 'light'; // 'dark'

// 2. Spread operator ile array kopyalama
let original = [1, 2, 3];
let copy = [...original]; // [1, 2, 3]
let extended = [...original, 4, 5]; // [1, 2, 3, 4, 5]

// 3. Destructuring ile array ve object erişimi
let [first, second, ...rest] = [1, 2, 3, 4, 5]; // first=1, second=2, rest=[3,4,5]
let { name, age, ...otherProps } = { name: 'John', age: 30, city: 'Istanbul' };

// 4. Template literals ile string formatlama
let message = `User ${name} is ${age} years old`; // 'User John is 30 years old'

// 5. Nullish coalescing ile default değerler
let username = user.name ?? 'Anonymous'; // name null/undefined ise 'Anonymous'
```

---

### 📝 **Özet**

Bu notlar TypeScript/JavaScript'te en yaygın kullanılan metodları kapsar:

- **Array metodları**: map, filter, reduce, find, forEach vb.
- **String metodları**: split, join, replace, trim vb.
- **Object metodları**: keys, values, entries, assign vb.
- **Type checking**: typeof, instanceof, Array.isArray vb.
- **Modern JS özellikleri**: spread, destructuring, optional chaining vb.

Her metodun tip güvenliği TypeScript tarafından sağlanır ve IDE desteği ile otomatik tamamlama alırsınız! 🎯
