/**
 * @file Controller RESTful Web service API interface for like resource
 */
import {Request, Response} from "express";

/**
 * This interface implements LikeControllerI
 */
export default interface LikeControllerI {
    findAllUsersThatLikedTuit (req: Request, res: Response): void;
    findAllTuitsLikedByUser (req: Request, res: Response): void;
    userLikesTuit (req: Request, res: Response): void;
    userUnlikesTuit (req: Request, res: Response): void;
};
