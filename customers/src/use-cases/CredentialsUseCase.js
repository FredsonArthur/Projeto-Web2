const {
  EmployeeDoesntExists,
} = require("../http/errors/CredentialsErrorHandle");

class CredentialsUseCase {
  #customerPrismaRepository;

  constructor(customerPrismaRepository) {
    this.#customerPrismaRepository = customerPrismaRepository;
  }

  async exec(data) {
    // Verifica, no banco de dados, se o usuário existe através do e-mail.
    const user = await this.#customerPrismaRepository.findByEmail({
      email: data.email,
    });

    if (!user) {
      // Se não existe, retorna o erro.
      throw new EmployeeDoesntExists();
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}

module.exports = { CredentialsUseCase };
