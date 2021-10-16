import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import graphql_config from './config/graphql.config';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { RoleModule } from './role/role.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriorityModule } from './priority/priority.module';
import { CategoryModule } from './category/category.module';
import typeorm_config from './config/orm.config';

@Module({
  imports: [
    GraphQLModule.forRoot(graphql_config),
    TypeOrmModule.forRoot(typeorm_config),
    UserModule,
    TaskModule,
    RoleModule,
    PriorityModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
