export interface TechnologyInterface {
  name: string;
  image: string;
  type: 'framework' | 'language' | 'other';
}

export class Technology implements TechnologyInterface {
  private _name: string;
  private _image: string;
  private _type: 'framework' | 'language' | 'other';

  constructor(name: string, image: string, type: 'framework' | 'language' | 'other') {
    this._name = name;
    this._image = image;
    this._type = type;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get type(): 'framework' | 'language' | 'other' {
    return this._type;
  }

  set type(value: 'framework' | 'language' | 'other') {
    this._type = value;
  }
}
