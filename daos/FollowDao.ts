/**
 * @file Implements DAO managing data storage of follows. Uses mongoose FollowModel
 * to integrate with MongoDB
 */
import FollowDaoI from "../interfaces/FollowDaoI";
import FollowModel from "../mongoose/follows/FollowModel";
import Follow from "../models/follows/Follow";

/**
 * @class FollowDao Implements Data Access Object managing data storage
 * of Users follow
 * @property {FollowDao} followDao Private single instance of FollowDao
 */
export default class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null;

    /**
     * Creates singleton DAO instance
     * @returns FollowDao
     */
    public static getInstance = (): FollowDao => {
        if (FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }

    private constructor() {}

    /**
     * Uses FollowModel to retrieve single message document from follows collection
     * @param {string} uid1 User's primary key
     * @returns Promise To be notified when following is retrieved from the database
     */

    findAllUsersFollowingUser = async (uid1: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollowed: uid1})
            .populate("userFollowing")
            .exec();

    /**
     * Uses FollowModel to retrieve single message document from follows collection
     * @param {string} uid1 User's primary key
     * @returns Promise To be notified when follow is retrieved from the database
     */
    findAllUsersFollowedByUser = async (uid1: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollowing: uid1})
            .populate("userFollowed")
            .exec();
    /**
     * Inserts follow instance into the database
     * @param {String} uid1 Instance to be inserted into the database
     * @param {String} uid2 Instance to be inserted into the database
     * @returns Promise To be notified when follow is inserted into the database
     */
    userFollowsAnotherUser = async (uid1: string, uid2: string): Promise<any> =>
        FollowModel.create({userFollowed: uid1, userFollowing: uid2});

    /**
     * Removes follow from the database.
     * @param {string} uid1 Primary key of follow to be removed
     * @param {string} uid2 Primary key of follow to be removed
     * @returns Promise To be notified when follow is removed from the database
     */
    userUnfollowsAnotherUser = async (uid1: string, uid2: string): Promise<any> =>
        FollowModel.deleteOne({userFollowed: uid1, userFollowing: uid2});
}
