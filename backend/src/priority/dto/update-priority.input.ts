import { CreatePriorityInput } from './create-priority.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePriorityInput extends PartialType(CreatePriorityInput) {
  @Field(() => Int)
  id: number;
}
