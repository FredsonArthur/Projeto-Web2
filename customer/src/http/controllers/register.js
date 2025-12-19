const { registerSchema } = require("../schemas/RegisterSchema");
const {
  PrismaCustomerFactory,
} = require("../../repositories/prisma/PrismaCustomerRepos");

const { MakeRegister } = require("../../use-cases/factories/makeRegister");

async function RegisterController(req, res) {
  try {
    const { name, email, address, birthDate, telephone, amount, type } =
      registerSchema.parse(req.body);

    const repoFactory = new PrismaCustomerFactory();
    const registerFactory = MakeRegister(repoFactory);

    // Registra os dados requisitados pelo usuário no frontend
    await registerFactory.exec({
      name,
      email,
      address,
      birthDate,
      telephone,
      amount,
      type,
    });

    res.status(201).json({
      message: "Cliente criado com sucesso!",
    });
  } catch (err) {
    const status = err.status || 500;

    res.status(status).json({
      message: err.message || "Ocorreu um erro inesperado.",
    });
  }
}

module.exports = { RegisterController };
