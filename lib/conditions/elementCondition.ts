import {Condition} from "./condition";
import {Element} from "../base-entities/element";

export class ElementCondition extends Condition<Element> {
    readonly matches: (entity: Element) => Promise<Element>;
}