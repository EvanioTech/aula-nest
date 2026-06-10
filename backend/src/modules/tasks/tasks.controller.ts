import { Patch,Delete, Param,Body, Controller, Get, Post, UseGuards ,Req, BadRequestException} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDTO } from "./dto/create-tasks.dto";
import { JwtAuthGuard } from "src/auth/jwwt-auth.guard";


@UseGuards(JwtAuthGuard)
@Controller("/tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async listar(@Req() req) {
    return this.tasksService.listar(req.user?.userId);
  }

  @Post()
  async criar(@Req() req, @Body() createTaskDTO: CreateTaskDTO) {
    const userId = req.user?.userId;
    if (!userId) throw new BadRequestException("ID do usuário não encontrado");
    createTaskDTO.userId = userId;
    return this.tasksService.criar(createTaskDTO);
  }

  @Delete(':id')
  async deletar(@Req() req, @Param('id') id: number) {
    return this.tasksService.deletar(id, req.user?.userId);
  }

  @Patch(':id')
  async completar(@Req() req, @Param('id') id: number) {
    return this.tasksService.completar(id, req.user?.userId);
  }
}