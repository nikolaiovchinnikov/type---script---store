import { propertiesDict ,storageLifeDays, str, num, bool} from "./interfase.js"
import {StoragePlace} from "./StoragePlace.js"
export abstract class Product {
    protected abstract name:str
    protected abstract storageLifeDays:storageLifeDays
    protected abstract deliveryTimestamp:Date | str
	protected abstract storagePlace:StoragePlace
    constructor(){

    }
    protected abstract IsFresh(): boolean | str;
    public get properties():propertiesDict{
        let IsFresh = this.IsFresh()
        let propertiesDict:propertiesDict = {
                name: this.name,
                deliveryTimestamp: this.deliveryTimestamp,
                storagePlace: this.storagePlace,
                storageLifeDays:this.storageLifeDays,
                IsFresh : IsFresh
        }
        return propertiesDict
    }

}