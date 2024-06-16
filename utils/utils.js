import CryptoJS from 'crypto-js';

export const generateChecksum = (params, key) => {
  const data = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  const hash = CryptoJS.HmacSHA256(data, key).toString(CryptoJS.enc.Hex);
  return hash;
};