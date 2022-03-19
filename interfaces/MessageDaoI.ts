/**
 * @file RESTful Web service API interface for message resource
 */
import Message from "../models/message/Message";

/**
 * @file Declares API for message related data access object methods
 */
export default interface MessageDaoI {
    userMessageUser (message: Message, uid1: string, uid2: string): Promise<Message>;
    userDeleteMessage (uid1: string): Promise<any>;
    findAllMessageReceivedFromUser (uid: string): Promise<Message[]>;
    findAllMessageSentToUser (uid: string): Promise<Message[]>;
}
