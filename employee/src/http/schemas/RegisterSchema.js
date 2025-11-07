const { z } = require("zod");

const emails = ["@lanhouse.com"];
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

const registerSchema = z
  .object({
    name: z.string().min(4).max(14),
    cpf: z.string().length(11),
    email: z
      .email()
      .min(1, { message: "Preencha o campo" })
      .refine((email) => {
        return emails.some((domain) => email.endsWith(domain));
      }, "Email inválido"),
    password: z.string().min(6).max(32),
    confirm: z.string().min(6).max(32),
  })
  .refine((data) => data.password === data.confirm, {
    message: "As senhas não são iguais",
    path: ["confirm"],
  });

module.exports = {
  registerSchema,
};
