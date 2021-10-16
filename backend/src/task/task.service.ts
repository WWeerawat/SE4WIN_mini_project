import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}
  create(createTaskInput: CreateTaskInput) {
    const newTask = this.taskRepository.create(createTaskInput);
    return this.taskRepository.save(newTask);
  }

  findAll() {
    return this.taskRepository.find(); // SELECT * Task
  }

  findOne(id: number) {
    return this.taskRepository.findOne(id);
  }

  update(id: number, updateTaskInput: UpdateTaskInput) {
    return this.taskRepository.update(id, updateTaskInput);
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
  }
}
