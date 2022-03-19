/**
 * @file Implements interface section to CRUD
 * documents in the section collection
 */
import {Schema, Types} from "mongoose";

export default interface Section {
    name: string;
    seats?: number;
    room?: string;
    startTime?: number;
    duration?: number;
    course?: Types.ObjectId
}
