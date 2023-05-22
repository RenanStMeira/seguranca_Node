import jwt from 'jsonwebtoken';

const chaveSecreta = 'chaveSuperSecreta'

//Criar o token
const token = jwt.sign(
    {
        apelido: 'RDMeira',
        curso: 'Node segurança'
    }, chaveSecreta
);

console.log(token)

//decodificar
const tokenDecodificado = jwt.verify(token, chaveSecreta)
console.log(tokenDecodificado)