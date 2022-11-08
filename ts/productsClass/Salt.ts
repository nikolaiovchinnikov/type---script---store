type str = string
type num = number
type bool = boolean
type storageLifeDays = {
    Icebox:num
    Showcase:num
}

import { Product } from "../Product";
import { StoragePlace } from "../StoragePlace";
export class Salt extends Product {
    protected name:str
    protected storageLifeDays:storageLifeDays
    protected deliveryTimestamp:Date | str
	protected storagePlace:StoragePlace
    constructor(deliveryTimestamp:Date, storagePlace:StoragePlace){
        super();
        this.deliveryTimestamp = deliveryTimestamp
        this.storagePlace = storagePlace
        this.name = "Соль"
        this.storageLifeDays = {
            Icebox : Number.POSITIVE_INFINITY,
            Showcase : Number.POSITIVE_INFINITY
        }
    }
    protected IsFresh(): boolean | str{
        return true
    }
    public get properties():object{
        let IsFresh = this.IsFresh()
        let propertiesDict: { 
            name: string; 
            deliveryTimestamp: Date | str;
            storagePlace:StoragePlace;
            storageLifeDays:storageLifeDays;
            IsFresh:bool | str} = {
                name: this.name,
                deliveryTimestamp: this.deliveryTimestamp,
                storagePlace: this.storagePlace,
                storageLifeDays:this.storageLifeDays,
                IsFresh : IsFresh
        }
        return propertiesDict
    }
        
    
}