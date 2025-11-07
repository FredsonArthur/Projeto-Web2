const {
  PrismaEmployeeFactory,
} = require("../../repositories/prisma/PrismaEmployeeRepos");

const { MakeProfile } = require("../../use-cases/factories/makeProfile");

async function ProfileController(req, res) {
  try {
    const userData = req.user;

    const repoFactory = new PrismaEmployeeFactory();
    const profileFactory = MakeProfile(repoFactory);

    const { user } = await profileFactory.exec({ id: userData.payload.sub.id });

    res.json({
      auth: true,
      user,
    });
  } catch (err) {
    const status = err.status || 500;

    res.status(status).json({
      message: err.message || "Ocorreu um erro inesperado.",
    });
  }
}

module.exports = { ProfileController };
