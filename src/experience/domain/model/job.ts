import { Experience, ExperienceInterface } from './experience';

export interface JobInterface extends ExperienceInterface {
  contractType: string;
}

export class Job extends Experience implements JobInterface {
  private _contractType: string;
  
  constructor(
    title: string,
    company: string,
    startDate: Date,
    endDate: Date | null,
    description: string,
    city: string,
    contractType: string
  ) {
    super(title, company, startDate, endDate, description, city);
    this._contractType = contractType;
  }

  get contractType(): string {
    return this._contractType;
  }
  
  set contractType(value: string) {
    this._contractType = value;
  }
}
