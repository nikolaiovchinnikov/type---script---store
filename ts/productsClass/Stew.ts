import { propertiesDict ,storageLifeDays, str,num, bool} from "../interfase.js"
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
            Icebox :<num> 86400000 * 150,
            Showcase :<num> 86400000 * 150
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