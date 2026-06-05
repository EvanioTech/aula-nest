import { Body, Controller, Delete, Get,  Post, Param, Put, BadRequestException , Req} from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import * as bcrypt from "bcrypt";

import { UsersService } from "./user.service";

@Controller("/users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Get()
  async listar() {
    return this.usersService.listarUsuarios();
  }

  @Get("/tasks")
  async listarMinhasTarefas(@Req() req) {
    const userId = req.user?.userId; 

    if (!userId) {
      throw new BadRequestException("ID do usuário não encontrado");
    }
    return this.usersService.listarMinhasTarefas(userId);
  }

  @Post()
  async criar(@Body() body: CreateUserDTO) {
    const hashedPassword =
  await bcrypt.hash(body.password, 10);
    return this.usersService.criarUsuario(body.name, hashedPassword, body.email);
  }

  @Put("/tasks/:id")
  async updateTask(@Param('id') id: string, @Body('title') title: string) {
    return this.usersService.updateTask(Number(id), title);
  }

  @Delete("/tasks/:id")
  async deletarTarefa(@Param('id') id: string) {
    return this.usersService.deletarTarefa(Number(id));
  }
}

