import { StoragePlace } from "./StoragePlace";
export type str = string
export type num = number
export type bool = boolean
export type storageLifeDays = {
    Icebox:num
    Showcase:num
}
export type propertiesDict = { 
    name: string; 
    deliveryTimestamp: Date | str;
    storagePlace:StoragePlace;
    storageLifeDays:storageLifeDays
    IsFresh:bool | str
} 
