//import Ed25519 from "https://taisukef.github.io/forge-es/lib/ed25519.js";
import Ed25519 from "../forge/lib/ed25519.js";

export const pubkey = (prikey) => Ed25519.generateKeyPair({ seed: prikey }).publicKey;
export const sign = (privateKey, message) => Ed25519.sign({ privateKey, message });
export const verify = (signature, publicKey, message) => Ed25519.verify({ signature, publicKey, message })
