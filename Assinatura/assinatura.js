import { generateKeyPairSync, createSign, createVerify } from 'crypto';

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

const dados = 'Essa string vai ser assinada';

// Assinatura
const assinador = createSign('RSA-SHA256');
assinador.update(dados);
const assinatura = assinador.sign(privateKey, 'hex');

console.log(`Assinatura: ${assinatura}`);
// Intermediario

// dados += 'Arquivo alterado'

// Verificação da assinatura
const verificador = createVerify('RSA-SHA256');
verificador.update(dados);
const resultado = verificador.verify(publicKey, assinatura, 'hex');

console.log(`Resultado: ${resultado}`);
