/**
 * @file Implements DAO managing data storage of section. Uses mongoose SectionModel
 * to integrate with MongoDB
 */
import SectionDaoI from "../interfaces/SectionDao";
import Section from "../mongoose/sections/Section";
import SectionModel from "../mongoose/sections/SectionModel";

/**
 * @class SectionDao Implements Data Access Object managing data storage
 * of Users section
 * @property {SectionDao} sectionDao Private single instance of SectionDao
 */
export default class SectionDao implements SectionDaoI {
    /**
     * Creates singleton DAO instance
     * @returns SectionDao
     */
    static instance: SectionDao = new SectionDao();
    private constructor() {}
    static getInstance(): SectionDao {
        return this.instance;
    }
    async createSectionForCourse(cid: string, section: Section): Promise<Section> {
        return await SectionModel.create({...section, course: cid});
    }
    async deleteSection(sid: string): Promise<any> {
        return await SectionModel.remove({_id: sid});
    }
    async findSectionById(sid: string): Promise<any> {
        return await SectionModel.findById(sid);
    }
    async findSectionByIdDeep(sid: string): Promise<any> {
        return await SectionModel
            .findById(sid)
            .populate("course")
            .exec();
    }
    async findAllSections(): Promise<Section[]> {
        return await SectionModel.find();
    }
    async findAllSectionsDeep(): Promise<Section[]> {
        return await SectionModel
            .find()
            .populate("course")
            .exec();
    }
    async findAllSectionsForCourse(cid: string): Promise<Section[]> {
        return await SectionModel.find({course: cid});
    }
    async findAllSectionsForCourseDeep(cid: string): Promise<Section[]> {
        return await SectionModel
            .find({course: cid})
            .populate("course")
            .exec();
    }
    async updateSection(sid: string, section: Section): Promise<any> {
        return await SectionModel.updateOne(
            {_id: sid},
            {$set: section});
    }
}
