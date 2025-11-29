const { RegisterUseCase } = require("../RegisterUseCase");

function MakeRegister(customerPrismaFactory) {
  const customerRepos = customerPrismaFactory.createRepository();
  const register = new RegisterUseCase(customerRepos);

  return register;
}

module.exports = { MakeRegister };
