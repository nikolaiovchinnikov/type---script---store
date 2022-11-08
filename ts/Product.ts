type str = string
type num = number
import {StoragePlace} from "./StoragePlace.js"
export abstract class Product {
    protected abstract name:str
    protected abstract storageLifeDays:object
    protected abstract deliveryTimestamp:Date | str
	protected abstract storagePlace:StoragePlace
    constructor(){

    }
    protected abstract IsFresh(): boolean | str;
    public abstract get properties():object

}