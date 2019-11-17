import {DeserializableModel} from './deserializable.model';

export class PictureModel implements DeserializableModel {
  id: string;
  image: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
