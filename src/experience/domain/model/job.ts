import { Experience, ExperienceInterface } from './experience';

export interface JobInterface extends ExperienceInterface {}

export class Job extends Experience implements JobInterface {}
