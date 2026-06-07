import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateLoginDTO } from './dto-login/create-login.dto';
import { pool } from 'src/infra/database/db';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService) {}

    async login(createLoginDTO: CreateLoginDTO) {

        const { email, password } = createLoginDTO;

        const [rows] = await pool.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        const user = (rows as any[])[0];

        if (!user) {
            throw new UnauthorizedException("Email  incorretos");
        }

        


        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            throw new UnauthorizedException("Email ou senha incorretos");
        }

        const token = this.jwtService.sign({ userId: user.id, email: user.email });



        return { message: "Login realizado com sucesso", token };
    }
}
