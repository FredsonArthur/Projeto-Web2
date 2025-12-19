const { EmployeeDoesntExists } = require("../http/errors/ProfileErrorHandle");

class ProfileUseCase {
  #customerPrismaRepository;

  constructor(customerPrismaRepository) {
    this.#customerPrismaRepository = customerPrismaRepository;
  }

  async exec(data) {
    const user = await this.#customerPrismaRepository.findById({ id: data.id });

    if (!user) {
      throw new EmployeeDoesntExists();
    }

    return { user };
  }
}

module.exports = { ProfileUseCase };
