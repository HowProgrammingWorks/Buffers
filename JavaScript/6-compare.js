'use strict';

const buffer1 = Buffer.from('Marcus');
const buffer2 = Buffer.from('Aurelius');
const buffer3 = Buffer.from('Aurelius');

console.dir({
  equals1: buffer1.equals(buffer1),
  equals2: buffer1.equals(buffer2),
  equals3: buffer2.equals(buffer3),
});

const bufs = [buffer1, buffer2];

bufs.sort(Buffer.compare).map(b => b.toString());

const strs = bufs.map(b => b.toString());

console.dir({ buffer1, buffer2, sorted: bufs, strs });
