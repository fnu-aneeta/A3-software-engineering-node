/**
 * @file Controller RESTful Web service API interface for bookmark resource
 */
import {Request, Response} from "express";

/**
 * This interface implements BookmarkControllerI
 */

export default interface BookmarkControllerI {
    findAllUsersThatBookmarkedTuit (req: Request, res: Response): void;
    findAllTuitsBookmarkedByUser (req: Request, res: Response): void;
    userBookmarksTuit (req: Request, res: Response): void;
    userUnbookmarksTuit (req: Request, res: Response): void;
};
