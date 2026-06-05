import { Controller , Body, Post} from '@nestjs/common';
import { CreateLoginDTO } from './dto-login/create-login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    async login(@Body() createLoginDTO: CreateLoginDTO) {
        return this.authService.login(createLoginDTO);
    }
}
