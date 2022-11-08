import { propertiesDict ,storageLifeDays, str, num, bool} from "./interfase.js"
export const getString = (objectInspect:propertiesDict )=>{
    return `${objectInspect.name.padStart(10)} | ${objectInspect.deliveryTimestamp.toLocaleString() + "".padEnd(5)} | ${objectInspect.storagePlace.padEnd(15)} | ${objectInspect.storageLifeDays.Icebox + "".padEnd(5)} | ${objectInspect.IsFresh + "".padEnd(5)}\n`
}
