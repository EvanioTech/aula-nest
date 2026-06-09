import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';


export class CreateUserDTO  {
  @IsNotEmpty({ message: ' O nome é obrigatório' })
  name!: string;

  @IsNotEmpty({ message: ' O email é obrigatório' })
  email!: string;

  @MinLength(6, { message: ' A senha deve ter pelo menos 6 caracteres' })
  password!: string;
}
  


