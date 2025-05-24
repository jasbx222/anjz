
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "الايميل غير صحيح" }),
  password: z.string().min(8, { message: "الحد الادنى للباسورد 8" }),
});