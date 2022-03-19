/**
 * @file Implements DAO managing data storage of messages. Uses mongoose MessageModel
 * to integrate with MongoDB
 */
import MessageModel from "../mongoose/messages/MessageModel";
import Message from "../models/message/Message";
import MessageDaoI from "../interfaces/MessageDaoI";

/**
 * @class MessageDao Implements Data Access Object managing data storage
 * of Users message
 * @property {MessageDao} messageDao Private single instance of MessageDao
 */
export default class MessageDao implements MessageDaoI {
    private static messageDao: MessageDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns MessageDao
     */
    public static getInstance = (): MessageDao => {
        if(MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }

    private constructor() {}

    /**
     * Uses MessageModel to retrieve single message document from messages collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when message is retrieved from the database
     */
    findAllMessageReceivedFromUser = async(uid: string): Promise<Message[]> =>
    MessageModel
        .find({receivedFrom: uid})
        .exec();

    /**
     * Uses MessageModel to retrieve single message document from messages collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when message is retrieved from the database
     */
    findAllMessageSentToUser = async(uid: string): Promise<Message[]> =>
        MessageModel
            .find({sentTo: uid})
            .exec()


    /**
     * Inserts message instance into the database
     * @param {String} uid1 Instance to be inserted into the database
     * @param {String} uid2 Instance to be inserted into the database
     * @param {message} Message Instance to be inserted into the database
     * @returns Promise To be notified when message is inserted into the database
     */
    userMessageUser = (message: Message, uid1: string, uid2: string): Promise<Message> =>
        MessageModel.create({...message, receivedFrom: uid1, sentTo: uid2})

    /**
     * Removes message from the database.
     * @param {string} mid Primary key of message to be removed
     * @returns Promise To be notified when message is removed from the database
     */
    userDeleteMessage = async(mid: string): Promise<any> =>
        MessageModel.deleteOne({_id: mid});


}
