// @ts-expect-error
import { db } from "@unimart/db";
// @ts-expect-error
import bcrypt from "bcryptjs";

async function main() {
  const hashedPassword = await bcrypt.hash("password123", 10);

  const user = await db.user.upsert({
    where: { email: "admin@test.com" },
    update: {},
    create: {
      email: "admin@test.com",
      name: "Test Admin",
      password: hashedPassword,
    },
  });

  console.log("Created test user:", user.email);
}

main().catch(console.error);
