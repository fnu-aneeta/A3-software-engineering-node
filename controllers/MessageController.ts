/**
 * @file Controller RESTful Web service API for messages resource
 */
import MessageDao from "../daos/MessageDao";
import Message from "../models/message/Message";
import {Express, Request, Response} from "express";
import MessageControllerI from "../interfaces/MessageControllerI";

/**
 * @class MessageController Implements RESTful Web service API for messages resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>POST /api/users/:uid1/messages/:uid2 to create a new message instance for
 *     a given user</li>
 *     <li>GET /api/users/:uid/messagesSent to retrieve sent message instances</li>
 *     <li>GET /api/users/:uid/messagesReceived to retrieve received message instances</li>
 *     <li>DELETE /api/messages/:mid to remove a particular message instance</li>
 * </ul>
 * @property {MessageDao} messageDao Singleton DAO implementing tuit CRUD operations
 * @property {MessageController} messageController Singleton controller implementing
 * RESTful Web service API
 */

export default class MessageController implements MessageControllerI {
    private static messageDao: MessageDao = MessageDao.getInstance();
    private static messageController: MessageController | null = null;

    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return TuitController
     */
    public static getInstance = (app: Express): MessageController => {
        if(MessageController.messageController === null) {
            MessageController.messageController = new MessageController();
            app.get("/api/users/:uid/messagesSent", MessageController.messageController.findAllMessageSentToUser);
            app.get("/api/users/:uid/messagesReceived", MessageController.messageController.findAllMessageReceivedFromUser);
            app.post("/api/users/:uid1/messages/:uid2", MessageController.messageController.userMessageUser);
            app.delete("/api/messages/:mid", MessageController.messageController.userDeleteMessage);
        }
        return MessageController.messageController;
    }

        private constructor() {}

    /**
     * Retrieves all messages from the database and returns sent messages.
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the message objects
     */

    findAllMessageSentToUser = (req: Request, res: Response) =>
        MessageController.messageDao.findAllMessageSentToUser(req.params.uid)
            .then(message => res.json(message));

    /**
     * Retrieves all messages from the database and returns received messages.
     * @param {Request} req Represents request from client
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the message objects
     */
    findAllMessageReceivedFromUser = (req: Request, res: Response) =>
        MessageController.messageDao.findAllMessageReceivedFromUser(req.params.uid)
            .then(message => res.json(message));

    /**
     * @param {Request} req Represents request from client, including body
     * containing the JSON object for the new message to be inserted in the
     * database
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new message that was inserted in the
     * database
     */
    userMessageUser = (req: Request, res: Response) =>
        MessageController.messageDao.userMessageUser(req.body, req.params.uid1, req.params.uid2)
            .then(message => res.json(message));

    /**
     * @param {Request} req Represents request from client, including path
     * parameter mid identifying the primary key of the message to be removed
     * @param {Response} res Represents response to client, including status
     * on whether deleting a message was successful or not
     */
    userDeleteMessage = (req: Request, res: Response) =>
        MessageController.messageDao.userDeleteMessage(req.params.mid)
            .then((status) => res.send(status));


}
