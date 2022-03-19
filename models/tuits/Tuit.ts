/**
 * @file Declares tuit data type representing relationship with
 * tuit and user
 */
import User from "../users/User";


/**
 * @typedef Tuit Represents tuit relationship between a user and a tuit
 * @property {User} postedBy User posted tuit
 * @property {Date} postedOn date
 * @property {string} tuit User tuit
 */
export default interface Tuit {
    tuit: string,
    postedBy: User,
    postedOn?: Date,
};
