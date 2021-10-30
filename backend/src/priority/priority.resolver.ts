import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PriorityService } from './priority.service';
import { Priority } from './entities/priority.entity';
import { CreatePriorityInput } from './dto/create-priority.input';
import { UpdatePriorityInput } from './dto/update-priority.input';

@Resolver(() => Priority)
export class PriorityResolver {
  constructor(private readonly priorityService: PriorityService) {}

  @Mutation(() => Priority)
  createPriority(
    @Args('createPriorityInput') createPriorityInput: CreatePriorityInput,
  ) {
    return this.priorityService.create(createPriorityInput);
  }

  @Query(() => [Priority], { name: 'priorities' })
  findAll() {
    return this.priorityService.findAll();
  }

  @Query(() => Priority, { name: 'priority' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.priorityService.findOne(id);
  }

  @Mutation(() => Priority)
  updatePriority(
    @Args('updatePriorityInput') updatePriorityInput: UpdatePriorityInput,
  ) {
    return this.priorityService.update(
      updatePriorityInput.id,
      updatePriorityInput,
    );
  }

  @Mutation(() => Priority)
  removePriority(@Args('id', { type: () => Int }) id: number) {
    return this.priorityService.remove(id);
  }
}
