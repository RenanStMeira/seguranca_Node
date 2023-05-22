import { generateKeyPairSync } from 'crypto';

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    },
});

// console.log(publicKey)
// console.log(privateKey)

import { publicEncrypt, privateDecrypt } from 'crypto';

const dadosCriptagrafados = publicEncrypt(
    publicKey,
    Buffer.from('Menssagem super secreta')
)

console.log(dadosCriptagrafados.toString('hex'));
//--------------Transmissão-----------------

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptagrafados
)

console.log(`Dados dcifrados: ${dadosCriptagrafados.toString('utf-8')}`);