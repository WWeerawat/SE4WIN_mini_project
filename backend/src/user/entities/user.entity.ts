import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'userID' })
  uid: number;
  @Field({ description: 'username' })
  name: string;
}
