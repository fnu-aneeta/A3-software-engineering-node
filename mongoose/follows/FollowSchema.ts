/**
 * @file Implements mongoose schema to CRUD
 * documents in the follows collection
 */
import mongoose, {Schema} from "mongoose";
import Follow from "../../models/follows/Follow";

/**
 * @typedef Follow Represents tuiter user's follows
 * @property {ObjectId[]} userFollowed users followed users
 * @property {ObjectId[]} userFollowing user following other users
 */
const FollowSchema = new mongoose.Schema<Follow>( {
    userFollowed: {type: Schema.Types.ObjectId, ref: "UserModel"},
    userFollowing: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "follows"});

export default FollowSchema;
