import { Body, Controller, Get,  Post } from "@nestjs/common";
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

  @Post()
  async criar(@Body() body: CreateUserDTO) {
    return this.usersService.criarUsuario(body.name, body.password, body.email);
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