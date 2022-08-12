import { Technology, TechnologyInterface } from './technology';

export interface LibraryInterface extends TechnologyInterface {}

export class Library extends Technology implements LibraryInterface {}
