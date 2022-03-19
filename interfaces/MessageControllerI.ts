/**
 * @file Controller RESTful Web service API interface for message resource
 */
import {Request, Response} from "express";
import Message from "../models/message/Message";

/**
 * This interface implements MessageControllerI
 */
export default interface MessageControllerI {
    userMessageUser (req: Request, res: Response): void;
    userDeleteMessage (req: Request, res: Response): void;
    findAllMessageSentToUser (req: Request, res: Response): void;
    findAllMessageReceivedFromUser (req: Request, res: Response): void;
};
