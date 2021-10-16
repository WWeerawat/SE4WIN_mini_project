import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';
import { Priority } from 'src/priority/entities/priority.entity';
@Entity()
@ObjectType()
export class Task {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  title: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  desc?: string;

  @OneToMany(() => Category, (category) => category.id)
  cateID: Category;
  @OneToMany(() => Priority, (priority) => priority.id)
  priorID: Priority;
}
