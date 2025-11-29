const { z } = require("zod");

const emails = ["@lanhouse.com"];
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

const registerSchema = z.object({
  name: z.string().min(4).max(14),
  email: z
    .email()
    .min(1, { message: "Preencha o campo" })
    .refine((email) => {
      return emails.some((domain) => email.endsWith(domain));
    }, "Email inválido"),
  telephone: z.string().min(12),
  address: z.string(),
  birthDate: z.string(),
});

module.exports = {
  registerSchema,
};
