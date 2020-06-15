import { Field, ArgsType, Int } from "type-graphql"
import { Length } from "class-validator";
import { ObjectID } from 'mongodb';

@ArgsType()
export class sendMessageArgs {
  @Field({ nullable: false })
  roomId: ObjectID

  @Field({ nullable: false })
  @Length(2, 25)
  content: string
}

@ArgsType()
export class deleteMessageArgs {
  @Field({ nullable: false })
  messageId: ObjectID

  @Field({ nullable: false })
  @Length(2, 25)
  content: string
}

@ArgsType()
export class getMessagesArgs {
  @Field({ nullable: false })
  roomId: ObjectID;

  @Field(type => Int)
  limit: number;

  @Field(type => Int)
  offset: number;
}