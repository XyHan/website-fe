import { ExperienceInterface } from '../model/experience';
import { JobInterface } from '../model/job';

export type ExperienceType = { jobs: JobInterface[], educations: ExperienceInterface[] };
