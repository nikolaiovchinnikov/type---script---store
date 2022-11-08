import { propertiesDict ,storageLifeDays, str,num, bool} from "../interfase.js"
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
            Icebox : <num>Number.POSITIVE_INFINITY,
            Showcase :<num> Number.POSITIVE_INFINITY
        }
    }
    protected IsFresh(): boolean | str{
        return true
    }

}