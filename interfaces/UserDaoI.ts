/**
 * @file RESTful Web service API interface for users resource
 */
import User from "../models/users/User";

/**
 * @file Declares API for user related data access object methods
 */

export default interface UserDaoI {
    findAllUsers (): Promise<User[]>;
    findUserById (uid: string): Promise<any>;
    createUser (user: User): Promise<User>;
    updateUser (uid: string, user: User): Promise<any>;
    deleteUser (uid: string): Promise<any>;
    deleteAllUsers (): Promise<any>;
    deleteUserByUsername (username: string): Promise<any>;
};
