import Ed25519 from "https://taisukef.github.io/forge-es/lib/ed25519.js";
//import Ed25519 from "../forge/lib/ed25519.js";
import { X25519 } from "https://code4fukui.github.io/X25519/X25519.js";
import { convertPublicKey, convertSecretKey } from "https://code4fukui.github.io/ed25519-to-x25519/src/ed2curve.js";
import { AESGCM } from "https://taisukef.github.io/AES-GCM-es/AESGCM.js";
import { setbin, subbin } from "https://js.sabae.cc/binutil.js";

export const prikey = () => {
  const prikey = new Uint8Array(32);
  crypto.getRandomValues(prikey);
  return prikey;
};

export const pubkey = (prikey) => Ed25519.generateKeyPair({ seed: prikey }).publicKey;
export const sign = (privateKey, message) => Ed25519.sign({ privateKey, message });
export const verify = (signature, publicKey, message) => {
  try {
    return Ed25519.verify({ signature, publicKey, message });
  } catch (e) {
    console.log(e);
  }
  return false;
};

export const sharekey = (prikey, pubkey) => X25519.getSharedKey(convertSecretKey(prikey), convertPublicKey(pubkey));

export const encrypt = (sharekey, data, precipher) => {
  const iv = precipher ? subbin(precipher, 0, 16) : AESGCM.createIV();
  AESGCM.incrementIV(iv);
  const [encdata, tag] = AESGCM.encrypt(sharekey, iv, data);
  //console.log(iv.length, tag.length, encdata.length);
  const cipher = new Uint8Array(iv.length + tag.length + encdata.length);
  setbin(cipher, 0, iv, iv.length); // 16
  setbin(cipher, iv.length, tag, tag.length); // 16
  setbin(cipher, iv.length + tag.length, encdata, encdata.length);  
  return cipher;
};
export const decrypt = (sharekey, cipher) => {
  const iv = subbin(cipher, 0, 16); // iv.length
  const tag = subbin(cipher, 16, 16); // tag.length
  const encdata = subbin(cipher, 32, cipher.length - 32);
  const data = AESGCM.decrypt(sharekey, iv, encdata, tag);
  return data;
};
