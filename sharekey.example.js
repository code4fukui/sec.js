import * as sec from "./sec.js";

const prikey1 = new Uint8Array(32);
crypto.getRandomValues(prikey1);
const pubkey1 = new Uint8Array(await sec.pubkey(prikey1));
console.log(pubkey1, prikey1);

const prikey2 = new Uint8Array(32);
crypto.getRandomValues(prikey2);
const pubkey2 = new Uint8Array(await sec.pubkey(prikey2));
console.log(pubkey2, prikey2);

const share1 = sec.sharekey(prikey1, pubkey2);
const share2 = sec.sharekey(prikey2, pubkey1);
console.log("sherekey", share1, share2);
