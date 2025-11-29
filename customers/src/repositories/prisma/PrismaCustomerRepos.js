const { prisma } = require("../../lib/prisma");

class PrismaCustomerRepos {
  async save(data) {
    // Registra o usuário no banco de dados
    try {
      const customer = await prisma.customers.create({
        data,
      });

      return customer;
    } catch (err) {
      console.error(err);
    }
  }

  async findById(value) {
    try {
      //Procura o usuário através do id
      const customer = await prisma.customers.findUnique({
        where: {
          id: value.id,
        },
      });

      return customer;
    } catch (err) {
      console.error(err);
    }
  }

  async findByEmail(value) {
    try {
      //Procura o usuário através do e-mail
      const customer = await prisma.customers.findUnique({
        where: {
          email: value.email,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      return customer;
    } catch (err) {
      console.error(err);
    }
  }
}

class PrismaCustomerFactory {
  createRepository() {
    return new PrismaCustomerRepos();
  }
}

module.exports = { PrismaCustomerFactory, PrismaCustomerRepos };
