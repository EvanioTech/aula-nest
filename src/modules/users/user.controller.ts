import { Body, Controller, Delete, Get,  Post, Param, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";

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

  @Get("/my-tasks")
  async listarMinhasTarefas() {
    const userId = 1; // Exemplo: ID do usuário logado
    return this.usersService.listarMinhasTarefas(userId);
  }

  @Post()
  async criar(@Body() body: CreateUserDTO) {
    return this.usersService.criarUsuario(body.name, body.password, body.email);
  }

  @Put("/tasks/:id")
  async updateTask(@Param('id') id: number, @Body('title') title: string) {
    return this.usersService.updateTask(id, title);
  }

  @Delete("/my-tasks/:id")
  async deletarTarefa(@Param('id') id: number) {
    return this.usersService.deletarTarefa(id);
  }
}

// Revisar
/*

type ParamsUser = {
    id: string;
    idEmpresa: string;
}

type BodyCreateUser = {
    name: string;
    age: number;
}

@Controller('/users')
export class UserController {


    @Get()
    getUsers(): string {
        return "List of users";
    }
    // Example: /users/123/456

    @Get('/:id/:idEmpresa')
    findById(@Param('id') id: ParamsUser['id'], @Param('idEmpresa') idEmpresa: ParamsUser['idEmpresa']): string {
        return `User details for ID: ${id}, Company ID: ${idEmpresa}`;
    }

    // Example: /users/findByPages?page=1&limit=10
    @Get('/findByPages')
    findByPages(@Query('page') page: number, @Query('limit') limit: number): string {
        return `Users found by pages - Page: ${page}, Limit: ${limit}`;
    }

    @Post('/create')
    createUser(@Body() data: BodyCreateUser) {
        return {
            ...data,
            id: randomUUID(),
            createdAt: new Date().toLocaleDateString('pt-BR'),
        }
    }
        
}

*/