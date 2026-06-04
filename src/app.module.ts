import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { TasksModule } from './modules/tasks/tasks.module';



@Module({
  imports: [UserModule,TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
