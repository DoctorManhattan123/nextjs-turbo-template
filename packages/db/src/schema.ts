import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  json,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  bigserial,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["student", "teacher"]);
export type RoleEnumType = (typeof roleEnum.enumValues)[number];

export const userTable = pgTable("user", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  email: text("email"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  role: roleEnum("role").notNull().default("student"),
  isOnboardingComplete: boolean("is_onboarding_complete")
    .notNull()
    .default(false),
});

export type UserModel = typeof userTable.$inferSelect;
