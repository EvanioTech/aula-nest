import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateLoginDTO } from './dto-login/create-login.dto';
import { connectDB } from 'src/infra/database/db';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {


    async login(createLoginDTO: CreateLoginDTO) {
        const db = await connectDB();

        const { email, password } = createLoginDTO;

        const [rows] = await db.query(
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



        return { message: "Login realizado com sucesso" };
    }
}
