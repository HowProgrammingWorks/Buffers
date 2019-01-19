'use strict';

const buffer = Buffer.from('Marcus Aurelius');

for (let i = 0; i < buffer.length; i++) {
  const n = buffer.readUInt8(i);
  console.log(n, String.fromCharCode(n));
}

buffer.writeUInt8(32, 8);
console.log(buffer, buffer.toString());
