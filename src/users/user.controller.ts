import { Controller, Get, Param, Query } from "@nestjs/common";

type ParamsUser = {
    id: string;
    idEmpresa: string;
}

@Controller()
export class UserController {


    @Get('/users')
    getUsers(): string {
        return "List of users";
    }
    // Example: /users/123/456

    @Get('/users/:id/:idEmpresa')
    findById(@Param('id') id: ParamsUser['id'], @Param('idEmpresa') idEmpresa: ParamsUser['idEmpresa']): string {
        return `User details for ID: ${id}, Company ID: ${idEmpresa}`;
    }

    // Example: /users/findByPages?page=1&limit=10
    @Get('/users/findByPages')
    findByPages(@Query('page') page: number, @Query('limit') limit: number): string {
        return `Users found by pages - Page: ${page}, Limit: ${limit}`;
    }
}