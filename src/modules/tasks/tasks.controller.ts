import { Body, Controller, Get, Post, UseGuards ,Req} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDTO } from "./dto/create-tasks.dto";
import { JwtAuthGuard } from "src/auth/jwwt-auth.guard";



@Controller("/tasks")
export class TasksController {
     constructor(
        private readonly tasksService: TasksService
      ) {}
      @UseGuards(JwtAuthGuard)
  @Get()
  async listar(@Req() req) {
    console.log("Usuário autenticado:", req.user);
    return req.user; // Retorna as informações do usuário autenticado
    
  }
  @Post()
  async criar(@Body() createTaskDTO: CreateTaskDTO) {
    return this.tasksService.criar(createTaskDTO);
  }
}