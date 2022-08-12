import { Technology, TechnologyInterface } from './technology';

export interface SystemInterface extends TechnologyInterface {}

export class System extends Technology implements SystemInterface {}
