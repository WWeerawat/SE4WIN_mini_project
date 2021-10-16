import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePriorityInput {
  @Field()
  name: string;
}
