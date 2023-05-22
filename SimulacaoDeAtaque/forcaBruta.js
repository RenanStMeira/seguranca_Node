import { createHash } from 'crypto';

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }

    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex');
    }

    autentica(nome, senha) {
        if (nome === this.nome && this.hash === this.criaHash(senha)) {
            console.log("Usuário autenticado com sucesso!");
            return true;
        } else {
            console.log("Falha na autenticação do usuário.");
            return false;
        }
    }
}

// Criar uma instância de usuário
const usuario = new Usuario('dRenan Meira', '1337');

// Laço de repetição
for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
    // Testar se consegue ser autenticado
    if (usuario.autentica('dRenan Meira', senhaTeste.toString())) {
        console.log(`A senha do usuário é ${senhaTeste}`);
        break; // Se encontrou a senha, encerra o loop
    }
}
