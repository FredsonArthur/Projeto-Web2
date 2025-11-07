const { ProfileUseCase } = require("../ProfileUseCase");

function MakeProfile(employeePrismaFactory) {
  const employeeRepos = employeePrismaFactory.createRepository();
  const profile = new ProfileUseCase(employeeRepos);

  return profile;
}

module.exports = { MakeProfile };
