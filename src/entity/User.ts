import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from 'typeorm'
import { Field, ObjectType } from 'type-graphql';

@ObjectType() 
@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number

  @Field(() => String)
  @Column()
  email?: string

  @Field(() => String)
  @Column()
  password?: string

  @Field(() => String)
  @CreateDateColumn({type:'timestamp'})
  date!: string

}