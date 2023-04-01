# sec.js
 
```js
import * as sec from "https://code4fukui.github.io/sec.js/sec.js";

// 秘密鍵(32byteのできるだけちゃんとした乱数)
const prikey = new Uint8Array(32);
crypto.getRandomValues(prikey);

// 秘密鍵を元に公開鍵(32byte)をつくる
const pubkey = sec.pubkey(prikey);
console.log(pubkey, prikey);

// 秘密鍵で電子署名する
const message = new TextEncoder().encode("Hello!");
const sign = sec.sign(prikey, message);
console.log(sign);

// 公開鍵から電子署名を検証する
console.log(sec.verify(sign, pubkey, message));
```
