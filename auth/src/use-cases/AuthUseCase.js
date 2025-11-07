const {
  EmployeeNotFound,
  PasswordNotMatch,
} = require("../http/errors/AuthErrorHandle");
const { comparePwd } = require("../utils/comparePwd");

class AuthUseCase {
  #employeeRepository;

  constructor(employeeRepository) {
    this.#employeeRepository = employeeRepository;
  }

  async exec(data) {
    const user = await this.#employeeRepository.findByEmail({
      email: data.email,
    });

    if (!user) {
      throw new EmployeeNotFound();
    }

    const pwd_is_match = await comparePwd(data.password, user.hashPwd);

    if (!pwd_is_match) {
      throw new PasswordNotMatch();
    }

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: undefined,
      },
    };
  }
}

module.exports = { AuthUseCase };
