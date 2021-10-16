import { Module } from '@nestjs/common';
import { PriorityService } from './priority.service';
import { PriorityResolver } from './priority.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Priority } from './entities/priority.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Priority])],
  providers: [PriorityResolver, PriorityService],
})
export class PriorityModule {}
