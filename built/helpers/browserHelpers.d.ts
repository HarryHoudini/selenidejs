import { Element } from "../base-entities/element";
export declare module BrowserHelpers {
    function openUrl(url: string): Promise<void>;
    function clearCacheAndCookies(): Promise<void>;
    function nextTab(): Promise<void>;
    function previosTab(): Promise<void>;
    function switchToFrame(frameElement: Element): Promise<void>;
    function switchToDefaultFrame(): Promise<void>;
}