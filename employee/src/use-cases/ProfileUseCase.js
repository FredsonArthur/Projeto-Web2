const { EmployeeDoesntExists } = require("../http/errors/ProfileErrorHandle");

class ProfileUseCase {
  #employeePrismaRepository;

  constructor(employeePrismaRepository) {
    this.#employeePrismaRepository = employeePrismaRepository;
  }

  async exec(data) {
    const user = await this.#employeePrismaRepository.findById({ id: data.id });

    if (!user) {
      throw new EmployeeDoesntExists();
    }

    return { user };
  }
}

module.exports = { ProfileUseCase };
