/**
 * @file Declares message data type representing relationship with
 * users with another user
 */
import User from "../users/User";

/**
 * @typedef Message Represents message relationship between a user and a another user
 * @property {User} sentTo user sent message
 * @property {User} receivedFrom User received message
 * @property {Date} sentOn date
 * @property {string} message User message
 */
export default interface Message {
    message : string,
    sentTo: User,
    receivedFrom: User,
    sentOn: Date,
};
