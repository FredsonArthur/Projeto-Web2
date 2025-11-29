const { CredentialsUseCase } = require("../CredentialsUseCase");

function MakeCredentials(customerPrismaFactory) {
  const customerRepos = customerPrismaFactory.createRepository();
  const crendentials = new CredentialsUseCase(customerRepos);

  return crendentials;
}

module.exports = { MakeCredentials };
