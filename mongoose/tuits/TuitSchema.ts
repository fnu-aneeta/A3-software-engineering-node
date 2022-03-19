/**
 * @file Implements mongoose schema to CRUD
 * documents in the Tuits collection
 */
import mongoose, {Schema} from "mongoose";
import Tuit from "../../models/tuits/Tuit";

/**
 * @typedef Tuit Represents tuiter user's tuits
 * @property {string} tuit tuiter tuit
 * @property {ObjectId[]} postedBy user tuit
 * @property {Date} postedOn posted date
 */
const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: {type: String, required: true},
    postedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    postedOn: {type: Date, default: Date.now}
}, {collection: "tuits"});
export default TuitSchema;
