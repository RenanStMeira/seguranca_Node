import crypto from 'crypto';

function criaHash(senha){
    return crypto.createHash('sha256').update(senha).digest('hex');
}

console.log(criaHash('uma string'));

class Usuario {
    constructor(nome, senha) {
        //guardar o nome
        this.nome = nome;
        //guardar a senha
        this.senha = criaHash(senha);
       
    }
     //Verificar se a senha esta certa
    autentica(nome, senha) {
        // verificar se o nome é o mesmo e senha
        if (this.nome === nome && this.senha === criaHash(senha)) {
            console.log('Usuario autenticado com sucesso');
            return true;
        }
        //Caso contratio
        console.log("Usuario ou senha invalido");
        return false;

    }
}

// Criar um novo usuario
const usuario = new Usuario('Renan', '123456');
console.log(usuario)

// Função de autenticação caso de sucesso
usuario.autentica('Renan', '123456')

//Caso de fracasso
usuario.autentica('Renam', '123456')