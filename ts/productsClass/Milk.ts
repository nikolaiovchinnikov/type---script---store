import { propertiesDict ,storageLifeDays, str,num, bool} from "../interfase.js"
import { Product } from "../Product";
import { StoragePlace } from "../StoragePlace";
export class Milk extends Product {
    protected name:str
    protected storageLifeDays:storageLifeDays
    protected deliveryTimestamp:Date | str
	protected storagePlace:StoragePlace
    constructor(deliveryTimestamp:Date, storagePlace:StoragePlace){
        super();
        this.deliveryTimestamp = deliveryTimestamp
        this.storagePlace = storagePlace
        this.name = "Молоко"
        this.storageLifeDays = {
            Icebox :<num> 86400000 * 60,
            Showcase :<num> 86400000 * 30
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