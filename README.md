# sec.js
 
```js
import * as sec from "https://code4fukui.github.io/sec.js/sec.js";

const prikey = new Uint8Array(32);
// 秘密鍵(32byteのできるだけちゃんとした乱数)
crypto.getRandomValues(prikey);

// 秘密鍵を元に公開鍵(32byte)をつくる
const pubkey = sec.pubkey(prikey);

// 秘密鍵で電子署名する
const message = new TextEncoder().encode("Hello!");
const sign = sec.sign(prikey, message);

// 公開鍵から電子署名を検証する
alert("VERIFIED:" + sec.verify(sign, pubkey, message));
</script>
```

## dependencies

- [forge-es](https://github.com/taisukef/forge-es) forked [Forge](https://github.com/digitalbazaar/forge)
- [X25519](https://github.com/code4fukui/X25519/) forked [js-x25519](https://github.com/CryptoEsel/js-x25519)
- [ed25519-to-x25519](https://github.com/code4fukui/ed25519-to-x25519/) forked [ed25519-to-x25519](https://github.com/jjavery/ed25519-to-x25519)
- [AESGCM](https://github.com/taisukef/AES-GCM-es/)
- [binutil](https://js.sabae.cc/binutil.js)
