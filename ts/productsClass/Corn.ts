type str = string
type num = number
type bool = boolean
type storageLifeDays = {
    Icebox:num
    Showcase:num
}
import { Product } from "../Product";
import { StoragePlace } from "../StoragePlace";
export class Corn extends Product {
    protected name:str
    protected storageLifeDays:storageLifeDays
    protected deliveryTimestamp:Date | str
	protected storagePlace:StoragePlace
    constructor(deliveryTimestamp:Date, storagePlace:StoragePlace){
        super();
        this.deliveryTimestamp = deliveryTimestamp
        this.storagePlace = storagePlace
        this.name = "Мясо"
        this.storageLifeDays = {
            Icebox : 86400000 * 20,
            Showcase : 86400000 * 4,
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
}