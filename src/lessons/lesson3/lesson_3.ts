import axios from 'axios';

const config = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
};

const axiosInst = axios.create(config);

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// 'https://jsonplaceholder.typicode.com/posts/1'

const prom = axiosInst.get('posts');
//console.log(prom);
//prom.then( res => console.log(res));

console.log(axiosInst.post('posts', {
    title: 'Buzz',
    body: 'Fuzz',
    userId: 1,
}).then(res => console.log(res)));




// just a plug
export default ()=>{};