const { EmployeeAlreadyExists } = require("../http/errors/RegisterErrorHandle");

class RegisterUseCase {
  #customerPrismaRepository;

  constructor(customerPrismaRepository) {
    this.#customerPrismaRepository = customerPrismaRepository;
  }

  async exec(data) {
    // Verifica se o usuário existe através do CPF
    const userAlreadyExists = await this.#customerPrismaRepository.findByEmail({
      email: data.email,
    });

    // Se já existe, retorna o erro.
    if (userAlreadyExists) {
      throw new EmployeeAlreadyExists();
    }

    // Salva os dados (incluindo a senha criptografada) no banco de dados
    const user = await this.#customerPrismaRepository.save({
      ...data,
    });

    // Retorna os dados do usuário
    return { user };
  }
}

module.exports = {
  RegisterUseCase,
};
