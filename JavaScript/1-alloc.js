'use strict';

const b1 = Buffer.alloc(1024);
console.log({ isBuffer: Buffer.isBuffer(b1) });
console.log(b1);

const b2 = Buffer.allocUnsafe(1024);
console.log({ isBuffer: Buffer.isBuffer(b2) });
console.log(b2);

