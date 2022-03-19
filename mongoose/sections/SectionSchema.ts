import mongoose, {Schema} from "mongoose";
import Section from "./Section";

/**
 * @typedef Section Represents user's section
 * @property {String} name
 * @property {Number} seats
 * @property {String} room
 * @property {Number} startTime
 * @property {ObjectId[]} course
 */
const SectionSchema = new mongoose.Schema<Section>({
    name: String,
    seats: Number,
    room: String,
    startTime: Number,
    duration: Number,
    course: {type: Schema.Types.ObjectId, ref: "CourseModel"}
}, {collection: "sections"});
export default SectionSchema;
