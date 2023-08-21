// Что выведется в консоль и в каком порядке?

setTimeout(() => {
  console.log(typeof ('10' * 2));
}, 0);

let p = new Promise((resolve, reject) => {
  let result = '10' + 2;
  console.log(result);
  resolve(result);
});

p.then((result) => {
  console.log(typeof result);
});

console.log('10' * 2);

/* результат вызова (в формате {номер строки: результат}):
{
    9: 102
    17: 20
    14: string
    4: number
}
*/
