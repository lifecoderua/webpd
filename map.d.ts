import { Hero } from './hero';
export declare class Map {
    static readonly x: number;
    static readonly y: number;
    map: any[];
    hero: Hero;
    static readonly tiles: string[];
    mapObjects: any[];
    constructor();
    readonly combinedMap: any[];
    move(keyCode: any): void;
}
