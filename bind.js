const printer = {
  name: 'Hexlet',
  print(greeting = 'hello') {
    console.log(`${greeting}, ${this.name}`);
  }
};

// Прямой запуск
printer.print(); // => "hello, Hexlet"


// Хотим запустить метод print через секунду
// Обязательно запустите этот код на своем компьютере
// чтобы почувствовать то как работает setTimeout
// 1000 - означает 1000 миллисекунд или 1 секунда
// printer.print - это не вызов, а передача функции
setTimeout(printer.print, 1000);

// Спустя секунду
// => "hello, undefined"


setTimeout(() => printer.print(), 1000);
// Спустя секунду
// => "hello, Hexlet"

// Или без setTimeout
const fn = () => printer.print();
// Все работает потому что print() вызывается из printer
fn(); // => "hello, Hexlet"


// Контекстом является тот же объект printer, в котором определен метод
// Это довольно странно выглядит, но жизнь — сложная штука
// bind вызывается на функции и возвращает функцию
const boundPrint = printer.print.bind(printer);

// Теперь можно так
boundPrint(); // => "hello, Hexlet"
setTimeout(boundPrint, 1000);
// Через секунду
// => "hello, Hexlet"

// Можно вызывать bind прямо по месту
// так как возвращается функция
setTimeout(printer.print.bind(printer), 1000);
// hello, Hexlet
