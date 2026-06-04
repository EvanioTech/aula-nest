import { Body, Controller, Get, Post } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDTO } from "./dto/create-tasks.dto";



@Controller("/tasks")
export class TasksController {
     constructor(
        private readonly tasksService: TasksService
      ) {}
  @Get()
  async listar() {
    return this.tasksService.listar();
  }
  @Post()
  async criar(@Body() createTaskDTO: CreateTaskDTO) {
    return this.tasksService.criar(createTaskDTO);
  }
}