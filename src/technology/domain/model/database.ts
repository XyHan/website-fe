import { Technology, TechnologyInterface } from './technology';

export interface DatabaseInterface extends TechnologyInterface {}

export class Database extends Technology implements DatabaseInterface {}
