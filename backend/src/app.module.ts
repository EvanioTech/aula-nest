import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [UserModule,TasksModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
