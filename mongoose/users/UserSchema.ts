/**
 * @file Implements mongoose schema to CRUD
 * documents in the user collection
 */
import mongoose from "mongoose";
import User from "../../models/users/User";

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
const UserSchema = new mongoose.Schema<User>({
    username: {type: String, required: true, default: `testusername${Date.now()}`},
    password: {type: String, required: true, default: `testpassword${Date.now()}`},
    firstName: String,
    lastName: String,
    email: {type: String, required: true, default: `testemail${Date.now()}`},
    profilePhoto: String,
    headerImage: String,
    biography: String,
    dateOfBirth: Date,
    accountType: {type: String, enum: ["PERSONAL", "ACADEMIC", "PROFESSIONAL"]},
    maritalStatus: {type: String, enum: ["MARRIED", "SINGLE", "WIDOWED"]},
    location: {
        latitude: Number,
        longitude: Number
    },
    salary: {type: Number, default: 50000}
}, {collection: "users"});

export default UserSchema;
