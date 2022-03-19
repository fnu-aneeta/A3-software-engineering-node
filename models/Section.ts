/**
 * @file Declares class for section for course related data
 */
export default class Section {
    private name: string = '';
    private seats: number = 50;
    private room: string | null = null;
    private startTime: number | null = null;
    private duration: number = 0;
}
