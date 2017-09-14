'use strict';

const buffer = Buffer.from('Marcus Aurelius');

if (buffer.includes('Marcus')) {
  console.log(`"${buffer.toString()}" includes "Marcus"`);
}

const k = buffer.indexOf('Aurelius');
console.log(`Index of "Aurelius" is ${k}`);

console.log(`Slice 3-5 "${buffer.slice(3, 6)}"`);
