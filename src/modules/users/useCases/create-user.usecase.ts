export type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
};

export class CreateUserUseCase {
  async execute(data: CreateUserDTO) {
    const db = await connectDB();

    const [result] = await db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [data.name, data.email, data.password]
    );

    return { id: (result as any).insertId, ...data };
  }
}

import { connectDB } from "../../database/db";