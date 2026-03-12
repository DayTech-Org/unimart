import { join } from "node:path";
import { config } from "dotenv";
import { z } from "zod";

config({ path: join(process.cwd(), "../../.env") });
config();

const envSchema = z.object({
  AUTH_SECRET: z.string().optional(),
  AUTH_URL: z.string().url().optional(),
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("Invalid environment variables:", z.treeifyError(_env.error));
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
