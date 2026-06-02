import { Controller, Get } from "@nestjs/common";



@Controller()
export class ProductsController {
    @Get('/products')
    getProducts(): string {
        return "List of products";
    }
}