import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePriorityInput } from './dto/create-priority.input';
import { UpdatePriorityInput } from './dto/update-priority.input';
import { Priority } from './entities/priority.entity';

@Injectable()
export class PriorityService {
  constructor(
    @InjectRepository(Priority)
    private priorityRepository: Repository<Priority>,
  ) {}
  create(createPriorityInput: CreatePriorityInput) {
    const newPrior = this.priorityRepository.create(createPriorityInput);
    return this.priorityRepository.save(newPrior);
  }

  findAll() {
    return this.priorityRepository.find();
  }

  findOne(id: number) {
    return this.priorityRepository.findOne(id);
  }

  update(id: number, updatePriorityInput: UpdatePriorityInput) {
    return this.priorityRepository.update(id, updatePriorityInput);
  }

  remove(id: number) {
    return this.priorityRepository.delete(id);
  }
}
