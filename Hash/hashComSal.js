import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function craiHashComSal(senha) {
    //Criar uma senha com randomBytes (tamanho) e passar como string
    const sal = randomBytes(16).toString('hex');
    //scryptSync recebe senha e transforma com sal 
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');

    return `${sal}:${senhaHasheada}`
}

class Usuario {
    constructor(nome, senha) {
        //Armazena o nome
        this.nome = nome;
        //senha é separada
        [this.sal, this.hash] = craiHashComSal(senha).split(':')
        
    }
    //Autenticar Usuario
    autentica(nome, senha){
        if (nome === this.nome){
            //criando a hash
            const testeHash = scryptSync(senha, this.sal, 64);
            //armazenando a hash
            const hashReal = Buffer.from(this.hash, 'hex');

            //Checar se elas correspondem
            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal);

            if(hashesCorrespondem){
                console.log('Usuario autenticado com sucesso');
                return true;
            }

        }

        console.log('Usuario ou senha incorretos');
        return false;
    }
}
// Instancia um novo usuario
const Rm = new Usuario('Renan', 'senha');
console.log(Rm)

//Teste de sucesso 
Rm.autentica('Renan', 'senha');