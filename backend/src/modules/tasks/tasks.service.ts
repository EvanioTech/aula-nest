import { Injectable, BadRequestException } from "@nestjs/common";
import { CreateTaskDTO } from "./dto/create-tasks.dto";
import { pool } from "../../infra/database/db";




@Injectable()
export class TasksService {

    

    async listar(userId: number) {
        
        const [rows] = await pool.query(
            "SELECT * FROM tasks WHERE user_id = ?",
            [userId]
        );

        return rows;
    }
  

async criar(createTaskDTO: CreateTaskDTO) {

  const {
    userId,
    title,
    completed
  } = createTaskDTO;

  

  const [rows] = await pool.query(
    `INSERT INTO tasks (user_id, title, completed) VALUES (?, ?, ?)`,
    [userId, title, completed ? 1 : 0]
  );

  const insertId = (rows as any).insertId;

  const [newTask] = await pool.query(
    'SELECT * FROM tasks WHERE id = ?',
    [insertId]
  );

  return (newTask as any[])[0]; // ✅ retorna a task real
}

async deletar(id: number, userId: number) {
  const [result] = await pool.query(
    'DELETE FROM tasks WHERE id = ? AND user_id = ?',
    [id, userId]
  );
  return result;
}

async completar(id: number, userId: number) {
  const [result] = await pool.query(
    'UPDATE tasks SET completed = NOT completed WHERE id = ? AND user_id = ?',
    [id, userId]
  );
  return result;
}

}
