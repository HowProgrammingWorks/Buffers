'use strict';

const buffer = Buffer.from('Marcus');

for (const char of buffer.values()) {
  console.dir({ char });
}

for (const [index, code] of buffer.entries()) {
  const char = String.fromCharCode(code);
  console.dir({ index, code, char });
}
