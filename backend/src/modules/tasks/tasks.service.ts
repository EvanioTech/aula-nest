import { Injectable, BadRequestException } from "@nestjs/common";
import { CreateTaskDTO } from "./dto/create-tasks.dto";
import { pool } from "../../infra/database/db";




@Injectable()
export class TasksService {

    

    async listar() {
        
        const [rows] = await pool.query(
            "SELECT * FROM tasks"
        );

        return rows;
    }
  

async criar(createTaskDTO: CreateTaskDTO) {

  const {
    userId,
    title,
    completed
  } = createTaskDTO;

  

  const [user] = await pool.query(
    "SELECT id FROM users WHERE id = ?",
    [userId]
  );

  if ((user as any[]).length === 0) {
    throw new BadRequestException(
      "Usuário não encontrado"
    );
  }

  const completedValue = completed ? 1 : 0;

  const [rows] = await pool.query(
    `
    INSERT INTO tasks
    (user_id, title, completed)
    VALUES (?, ?, ?)
    `,
    [userId, title, completedValue]
  );

  return rows;
}
}
