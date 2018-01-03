/**
 *
 */
export enum Type {
  String = 'string',
  Integer = 'integer',
  Float = 'float'
}

export class SvcProperty {
  name: string;
  dataType: Type
}

export class SvcEntity {
  name: String;
  properties: SvcProperty[] = [];
}
