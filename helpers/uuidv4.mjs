/* eslint-disable no-bitwise */
import crypto from 'crypto';

const getRandomChar = (char) => {
  const random = crypto.randomFillSync(new Uint8Array(1))[0];
  return (((char ^ random) & 15) >> char / 4).toString(16);
};

export default function uuidv4() {
  const pattern = '10000000-1000-4000-8000-100000000000';
  return pattern.replace(/[018]/g, getRandomChar);
}
