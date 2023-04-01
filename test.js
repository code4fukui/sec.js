import * as sec from "./sec.js";

const prikey = new Uint8Array(32);
crypto.getRandomValues(prikey);
const pubkey = sec.pubkey(prikey);
console.log(pubkey, prikey);
const message = new TextEncoder().encode("Hello!");
const sign = sec.sign(prikey, message);
console.log(sign);
console.log(sec.verify(sign, pubkey, message));
