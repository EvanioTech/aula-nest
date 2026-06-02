import { Controller, Get } from "@nestjs/common";



@Controller()
export class UserController {


    @Get('/users')
    getUsers(): string {
        return "List of users";
    }
}