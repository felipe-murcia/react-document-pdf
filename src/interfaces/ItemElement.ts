import { TypeContent } from "../enums/TypeContent";

export interface ItemElement {
  type:
    | TypeContent.TITLE
    | TypeContent.SUBTITLE
    | TypeContent.PARRAPH
    | TypeContent.IMAGE;
  value: any;
  align: 'left' | 'center' | 'right';
}