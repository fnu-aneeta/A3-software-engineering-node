/**
 * @file RESTful Web service API interface for follows resource
 */
import Follow from "../models/follows/Follow"

/**
 * @file Declares API for Follow related data access object methods
 */
export default interface FollowDaoI {
    userFollowsAnotherUser(uid1: string, uid2: string): Promise<any>;
    userUnfollowsAnotherUser(uid1: string, uid2: string): Promise<any>;
    findAllUsersFollowedByUser(uid1: string): Promise<Follow[]>;
    findAllUsersFollowingUser(uid1: string): Promise<Follow[]>;
};
