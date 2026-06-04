import { Injectable,BadRequestException } from "@nestjs/common";
import { connectDB } from "./../database/db";

@Injectable()
export class UsersService {

  async listarUsuarios() {
    const db = await connectDB();

    const [rows] = await db.query(
      "SELECT * FROM users"
    );

    return rows;
  }

  async criarUsuario(name: string, password: string, email: string) {
    try {
    const db = await connectDB();

    const [rows] = await db.query(
      "INSERT INTO users (name, password,email) VALUES (?, ?, ?)",
      [name, password, email]
    );

    return rows;
  }
    catch (error: unknown) {
        if (error instanceof Error) {
            if (error.message.includes("ER_DUP_ENTRY")) {
            throw new BadRequestException("Email já cadastrado");
            }
            throw new BadRequestException("Erro ao criar usuário");
        }
    }
  }

}