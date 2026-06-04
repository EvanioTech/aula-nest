import { Injectable } from "@nestjs/common";




@Injectable()
export class TasksService {
    listar() {
        return "List of tasks";
    }
}