import { Query, Resolver, Mutation, Arg, Field, InputType } from 'type-graphql'
import { User } from '../entity/User'
import bcrypt from 'bcrypt'

@InputType()
class UserInput {

  @Field({ nullable: true })
  email?: string

  @Field({ nullable: true })
  password?: string
}

@Resolver()
export class UserResolver {

  @Mutation(() => User)
  async registerUser(
    @Arg("values") values: UserInput
  ){
    try {
      const { password } = values
      values.password = await bcrypt.hash(password!, 10)

      const newUser = User.create(values)
      return await newUser.save()

    } catch (error) {
      return false
    }
  }

  @Mutation(() => Boolean)
  async updateUser (
    @Arg("id")     userID: number,
    @Arg("values") values: UserInput
  ){
    try {
      
      const updateUser = await User.update({ id: userID }, values)
      console.log(updateUser);

      return true

    } catch (error) {
      return {
        ok: false,
        message: 'Error al actualizar usuario'
      }
    }
  }

  @Mutation(() => Boolean)
  async deleteUser(
     @Arg("id") id: number
  ){
    try {
      await User.delete({ id })
      return true
    } catch (error) {
      return false
    }
  }

  @Query(() => [User])
  users() {
    return User.find()
  }

}

// @Arg("email")    email   : string,
// @Arg("password") password: string