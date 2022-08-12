import { Technology, TechnologyInterface } from './technology';

export interface FrameworkInterface extends TechnologyInterface {}

export class Framework extends Technology implements FrameworkInterface {}
