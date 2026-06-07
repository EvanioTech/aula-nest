import { Injectable,BadRequestException } from "@nestjs/common";
import { pool } from "../../infra/database/db";
import { ResultSetHeader } from "mysql2";


@Injectable()
export class UsersService {

  async listarUsuarios() {
    

    const [rows] = await pool.query(
      "SELECT * FROM users"
    );

    return rows;
  }

  async listarMinhasTarefas(userId: number) {

    const [rows] = await pool.query(
      "SELECT * FROM tasks WHERE user_id = ?",
      [userId]
    );

    return rows;
  }

  async deletarTarefa(id: number) {
   

    const [result] = await pool.query<ResultSetHeader>(
      "DELETE FROM tasks WHERE id = ?",
      [id]
    );
    if(result.affectedRows === 0) {
      throw new BadRequestException("Tarefa não encontrada");
    }

    return { message: "Tarefa deletada com sucesso" };
  }

  async criarUsuario(name: string, password: string, email: string) {
    try {

    const [rows] = await pool.query(
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

  async updateTask(id: number, title: string) {
    const [rows] = await pool.query(
      "UPDATE tasks SET title = ? WHERE id = ?",
      [title, id]
    );

    return rows;
  }

}