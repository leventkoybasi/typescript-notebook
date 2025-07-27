let message: string = 'Hello, TypeScript!';
console.log(`(${typeof message}) -> `, message.toUpperCase());

const h1Element = document.createElement('h1');
h1Element.textContent = message;
document.body.appendChild(h1Element);
console.log('TypeScript is running in the browser!');
