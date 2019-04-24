export class Professor {
    id: number;
    nome: string;
    email: string;
    senha: string;

    constructor() {

    }

}

export class ProfessorDto{
    uuid: number;
    primeiroNome: string;
    ultimoNome: string;
    // auth information
    email: string;
    username: string;
    senha: string;
    // address
    rua: string;
    cidade: string;
    estado: string;
    cep: number;

    constructor() {

    }
}

export class ProfessorRegisterDto {
    nome: {
      primeiro: string,
      ultimo: string,
    };
    endereco: {
      rua: string,
      cidade: string,
      estado: string,
      cep: number;
    };
    email: string;
    login: {
      username: string,
      senha: string
    };

    constructor() {
        this.nome = {
            primeiro: '',
            ultimo: ''
        };
        this.login = {
            username: '',
            senha: ''
        };
        this.endereco = {
            rua: '',
            cidade: '',
            estado: '',
            cep: null
        };
    }
  }