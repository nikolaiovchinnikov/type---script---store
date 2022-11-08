type str = string
type num = number
type bool = boolean
type storageLifeDays = {
    Icebox:num
    Showcase:num
}
import { Product } from "../Product";
import { StoragePlace } from "../StoragePlace";
export class Stew extends Product {
    protected name:str
    protected storageLifeDays:storageLifeDays
    protected deliveryTimestamp:Date | str
	protected storagePlace:StoragePlace
    constructor(deliveryTimestamp:Date, storagePlace:StoragePlace){
        super();
        this.deliveryTimestamp = deliveryTimestamp
        this.storagePlace = storagePlace
        this.name = "Кукуруза"
        this.storageLifeDays = 
        this.storageLifeDays = {
            Icebox : 86400000 * 150,
            Showcase : 86400000 * 150
        }
    }
    public IsFresh(): boolean | str{
        let timeDifference = Date.now() - Date.parse(<str>this.deliveryTimestamp)
        if(this.storagePlace === StoragePlace.Icebox){
            if (timeDifference > this.storageLifeDays.Icebox){
                return false
            }
            else{
                return true
            }
        }
        else if(this.storagePlace === StoragePlace.Showcase){
            if (timeDifference > this.storageLifeDays.Icebox){
                return false
            }
            else{
                return true
            }
        }
        return "erorr"
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