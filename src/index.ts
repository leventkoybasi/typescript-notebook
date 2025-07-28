let message: string =
  "TypeScript, JavaScript'in üst kümesi olarak tasarlanmış bir programlama dilidir. Statik tip kontrolü, nesne yönelimli programlama ve modern JavaScript özelliklerini destekler. TypeScript, büyük ölçekli uygulamaların geliştirilmesinde geliştiricilere daha iyi bir deneyim sunar.";
console.log(`(${typeof message}) -> `, message.toUpperCase());

const h1Element = document.createElement('h1');
h1Element.textContent = message;
document.body.appendChild(h1Element);
console.log('TypeScript is running in the browser!');
