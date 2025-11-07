const { CredentialsUseCase } = require("../CredentialsUseCase");

function MakeCredentials(employeePrismaFactory) {
  const employeeRepos = employeePrismaFactory.createRepository();
  const crendentials = new CredentialsUseCase(employeeRepos);

  return crendentials;
}

module.exports = { MakeCredentials };
