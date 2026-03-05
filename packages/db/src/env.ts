import { join } from "node:path";
import { config } from "dotenv";
import { z } from "zod";

config({ path: join(process.cwd(), "../../.env") });
config();

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("Invalid environment variables:", z.treeifyError(_env.error));
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
