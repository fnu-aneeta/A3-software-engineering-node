/**
 * @file Controller RESTful Web service API interface for user resource
 */
import {Request, Response} from "express";

/**
 * This interface implements UserControllerI
 */
export default interface UserControllerI {
    findAllUsers (req: Request, res: Response): void;
    findUserById (req: Request, res: Response): void;
    createUser (req: Request, res: Response): void;
    updateUser (req: Request, res: Response): void;
    deleteUser (req: Request, res: Response): void;
    deleteAllUsers (req: Request, res: Response): void;
    deleteUserByUsername (req: Request, res:Response): void;
};
