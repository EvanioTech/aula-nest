import { Injectable, BadRequestException } from "@nestjs/common";
import { CreateTaskDTO } from "./dto/create-tasks.dto";
import { connectDB } from "../../infra/database/db";




@Injectable()
export class TasksService {

    

    async listar() {
        const db = await connectDB();
        const [rows] = await db.query(
            "SELECT * FROM tasks"
        );

        return rows;
    }

    
    

async criar(createTaskDTO: CreateTaskDTO) {

  const db = await connectDB();

  const {
    userId,
    title,
    completed
  } = createTaskDTO;

  // VERIFICA USUÁRIO

  const [user] = await db.query(
    "SELECT id FROM users WHERE id = ?",
    [userId]
  );

  // ARRAY VAZIO
  if ((user as any[]).length === 0) {
    throw new BadRequestException(
      "Usuário não encontrado"
    );
  }

  // CRIA TASK
  const completedValue = completed ? 1 : 0;

  const [rows] = await db.query(
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
