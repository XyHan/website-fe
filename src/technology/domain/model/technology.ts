export interface TechnologyInterface {
  name: string;
  image: string;
}

export abstract class Technology implements TechnologyInterface {
  protected _name: string;
  protected _image: string;

  constructor(name: string, image: string) {
    this._name = name;
    this._image = image;
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
}
