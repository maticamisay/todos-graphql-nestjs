import { Module, forwardRef } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserResolver } from "./user.resolver";
import { User, UserSchema } from "./user.model";
import { MongooseModule } from "@nestjs/mongoose";
import { TodoModule } from "src/todo/todo.module";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [
    forwardRef(() => TodoModule),
    forwardRef(() => AuthModule),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
