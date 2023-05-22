import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const mensagem = 'Demonstração';
// Chave para encriptar ou desencriptar a informação
const chave = randomBytes(32);
// Vetor de inicialização 
const iv = randomBytes(16);

const cifra = createCipheriv('aes-256-cbc', chave, iv);

// Cifrar a mensagem
let mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex');
mensagemCifrada += cifra.final('hex');

console.log(mensagemCifrada);

// Decifrar a mensagem
const decifra = createDecipheriv('aes-256-cbc', chave, iv);

let mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8');
mensagemDecifrada += decifra.final('utf-8');

console.log(`Decifrado: ${mensagemDecifrada}`);
