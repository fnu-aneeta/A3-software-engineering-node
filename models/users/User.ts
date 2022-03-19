/**
 * @file Implements user interface to CRUD
 * documents in the user collection
 */
import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";
import mongoose from "mongoose";

/**
 * @typedef User Represents tuiter users
 * @property {string} username tuiter username
 * @property {string} password username password
 * @property {string} firstName user's first name
 * @property {string} lastName user's last name
 * @property {string} email user's email
 * @property {string} profilePhoto user's photo
 * @property {string} headerImage user's cover image
 * @property {string} biography user's biography
 * @property {Date} dateOfBirth user's date of birth
 * @property {string} accountType user's type of account
 * @property {string} maritalStatus user's marital status
 * @property {number} location user's location
 * @property {number} salary user's salary
 */

export default interface User {
    _id?: mongoose.Schema.Types.ObjectId,
    username: string,
    password: string,
    firstName?: string,
    lastName?: string,
    email: string,
    profilePhoto?: string,
    headerImage?: string,
    biography?: string,
    dateOfBirth?: Date,
    accountType?: AccountType,
    maritalStatus?: MaritalStatus,
    location?: Location,
    salary?: number
};
