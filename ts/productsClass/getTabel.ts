type str = string
type bool = boolean
type storageLifeDays = number
type propertiesDict = { 
    name: string; 
    deliveryTimestamp: Date | str;
    storagePlace:StoragePlace;
    storageLifeDays:storageLifeDays;
    IsFresh:bool | str
} 

import { StoragePlace } from "../StoragePlace"
export const getString = (objectInspect:propertiesDict )=>{
    return `${objectInspect.name.padStart(10)} | ${objectInspect.deliveryTimestamp.toLocaleString() + "".padEnd(5)} | ${objectInspect.storagePlace.padEnd(15)} | ${objectInspect.storageLifeDays + "".padEnd(5)} | ${objectInspect.IsFresh + "".padEnd(5)}\n`
}
