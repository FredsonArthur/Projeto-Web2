const { ProfileUseCase } = require("../ProfileUseCase");

function MakeProfile(customerPrismaFactory) {
  const customerRepos = customerPrismaFactory.createRepository();
  const profile = new ProfileUseCase(customerRepos);

  return profile;
}

module.exports = { MakeProfile };
