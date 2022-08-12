import { Technology, TechnologyInterface } from './technology';

export interface LanguageInterface extends TechnologyInterface {}

export class Language extends Technology implements LanguageInterface {}
