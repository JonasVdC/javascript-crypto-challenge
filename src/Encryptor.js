const nacl = require('libsodium-wrappers')

module.exports = async (sharedRx) => {
    await nacl.ready;
   

    return Object.freeze({
        encrypt: (msg) => {
            const nonce = nacl.randombytes_buf(nacl.crypto_secretbox_NONCEBYTES);
            const ciphertext = nacl.crypto_secretbox_easy(msg, nonce, sharedRx);
            return {
                nonce: nonce,
                ciphertext: ciphertext
            }

        }
    })
}