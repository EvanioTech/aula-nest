import { Body, Controller, Get, Post, UseGuards ,Req, BadRequestException} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDTO } from "./dto/create-tasks.dto";
import { JwtAuthGuard } from "src/auth/jwwt-auth.guard";


@UseGuards(JwtAuthGuard)
@Controller("/tasks")
export class TasksController {
     constructor(
        private readonly tasksService: TasksService
      ) {}
      
  @Get()
  async listar(@Req() req) {
    console.log("Usuário autenticado:", req.user);
    return req.user; // Retorna as informações do usuário autenticado
    
  }
  @Post()
  async criar(@Req() req, @Body() createTaskDTO: CreateTaskDTO) {
    const userId = req.user?.userId; // Supondo que o ID do usuário esteja disponível em req.user

    if (!userId) {
      throw new BadRequestException("ID do usuário não encontrado");
    }

    createTaskDTO.userId = userId; // Atribui o ID do usuário à tarefa
    return this.tasksService.criar(createTaskDTO);
  }
}