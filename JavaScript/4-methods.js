'use strict';

const buffer = Buffer.from('Marcus Aurelius');

if (buffer.includes('Marcus')) {
  console.log(`"${buffer.toString()}" includes "Marcus"`);
}

const k = buffer.indexOf('Aurelius');
console.log(`Index of "Marcus" is ${k}`);

console.log(`Slice 3-7 "${buffer.slice(3, 6)}"`);
