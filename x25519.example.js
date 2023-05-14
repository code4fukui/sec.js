import { X25519 } from "https://code4fukui.github.io/X25519/X25519.js";
import { Ed25519 } from "https://code4fukui.github.io/Ed25519/Ed25519.js";
import { subbin } from "https://js.sabae.cc/binutil.js";

const user1 = Ed25519.generateKeyPair();
//const pub1 = X25519.getPublic(subbin(user1.privateKey, 0, 32));
const pub1 = X25519.getPublic(user1.publicKey);
// send pub1 to user2
//console.log("PP", user1.privateKey, subbin(user1.privateKey, 0, 32))
console.log(user1, pub1)

const user2 = Ed25519.generateKeyPair();
//const pub2 = X25519.getPublic(subbin(user2.privateKey, 0, 32));
const pub2 = X25519.getPublic(user2.publicKey);
// send pub2 to user1

// user1
const shared1 = X25519.getSharedKey(subbin(user1.privateKey, 0, 32), pub2);
// user2
const shared2 = X25519.getSharedKey(subbin(user2.privateKey, 0, 32), pub1);
console.log(shared1, shared2);
