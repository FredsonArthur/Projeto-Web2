const { PrismaClient } = require("@prisma/client");
const { _env } = require("../env");

const prisma = new PrismaClient({
  log: _env.NODE_ENV ? ["query"] : ["error"],
});

module.exports = {
  prisma,
};
