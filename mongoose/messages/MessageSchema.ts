/**
 * @file Implements mongoose schema to CRUD
 * documents in the message collection
 */
import mongoose , {Schema} from "mongoose";
import Message from "../../models/message/Message";

/**
 * @typedef Message Represents tuiter user's messages
 * @property {string} message tuiter message
 * @property {ObjectId[]} sentTo user sent message
 * @property {ObjectId[]} receivedFrom user's received message
 * @property {Date} sentOn date
 */
const MessageSchema = new mongoose.Schema<Message>( {
    message: {type: String, required: true},
    sentTo: {type: Schema.Types.ObjectId, ref: "UserModel"},
    receivedFrom: {type: Schema.Types.ObjectId, ref: "UserModel"},
    sentOn: {type: Date, default: Date.now}

}, {collection: "messages"});
export default MessageSchema
