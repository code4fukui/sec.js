import Ed25519 from "https://taisukef.github.io/forge-es/lib/ed25519.js";
//import Ed25519 from "../forge/lib/ed25519.js";
import { X25519 } from "https://code4fukui.github.io/X25519/X25519.js";
import { convertPublicKey, convertSecretKey } from "https://code4fukui.github.io/ed25519-to-x25519/src/ed2curve.js";

export const pubkey = (prikey) => Ed25519.generateKeyPair({ seed: prikey }).publicKey;
export const sign = (privateKey, message) => Ed25519.sign({ privateKey, message });
export const verify = (signature, publicKey, message) => Ed25519.verify({ signature, publicKey, message })
export const sharekey = (prikey, pubkey) => X25519.getSharedKey(convertSecretKey(prikey), convertPublicKey(pubkey));
