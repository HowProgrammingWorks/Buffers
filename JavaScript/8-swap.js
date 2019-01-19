'use strict';

const buffer = Buffer.from('Marcus Aurelius ');
console.log(buffer, buffer.toString());

buffer.swap16();
console.log(buffer, buffer.toString());

buffer.swap32();
console.log(buffer, buffer.toString());

buffer.swap64();
console.log(buffer, buffer.toString());
