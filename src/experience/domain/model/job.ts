import { Experience, ExperienceInterface } from './experience';

export interface WorkInterface extends ExperienceInterface {}

export class Job extends Experience implements WorkInterface {}
