import { Experience, ExperienceInterface } from './experience';

export interface EducationInterface extends ExperienceInterface {}

export class Education extends Experience implements EducationInterface {}
