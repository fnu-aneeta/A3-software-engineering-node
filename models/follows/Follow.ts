/**
 * @file Declares Like data type representing relationship between
 * users and follows, as in user follows a user
 */
import User from "../users/User";
/**
 * @typedef Follow Represents follows relationship between a user and a user,
 * @property {User} userFollowed Tuit being liked
 * @property {User} userFollowing User liking the tuit
 */
export default interface Follow {
    userFollowed: User,
    userFollowing: User
}
