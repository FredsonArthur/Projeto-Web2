const { RegisterUseCase } = require("../RegisterUseCase");

function MakeRegister(employeePrismaFactory) {
  const employeeRepos = employeePrismaFactory.createRepository();
  const register = new RegisterUseCase(employeeRepos);

  return register;
}

module.exports = { MakeRegister };
