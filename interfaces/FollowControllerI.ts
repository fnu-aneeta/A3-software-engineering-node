/**
 * @file Controller RESTful Web service API interface for follow resource
 */
import {Request, Response} from "express";

/**
 * This interface implements FollowControllerI
 */
export default interface FollowControllerI {
    userFollowsAnotherUser(req: Request, res: Response): void;
    userUnfollowsAnotherUser(req: Request, res: Response): void;
    findAllUsersFollowedByUser(req: Request, res: Response): void;
    findAllUsersFollowingUser(req: Request, res: Response): void;
};
