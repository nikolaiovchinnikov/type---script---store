
import { propertiesDict ,num ,storageLifeDays} from "./interfase.js"
import { getString } from "./getTabel.js"
import { Product } from "./Product.js"
import { Salt } from "./productsClass/Salt.js"
import { Stew } from "./productsClass/Stew.js"
import { Corn } from "./productsClass/Corn.js"
import { Milk } from "./productsClass/Milk.js"
import { Fish } from "./productsClass/Fish.js"
import { getRandomNumber } from "./getRandomNumber.js"//импортировал функцию которая возвращает рандомное число
import { StoragePlace } from "./StoragePlace.js"

class Store {
    private _products:Array<Product> = []
    constructor(){
        for (let i = 0; i < 20; i++) {
            const product:Product | num = this.getRandomProduct()
            this._products.push(<Product>product)
        }
    }
    private getRandomProduct():Product | num{
        
        switch(getRandomNumber(1, 5)){
            case 1:
                return new Salt(this.GetRandomDeliveryTime(),<StoragePlace>this.GetRandomStoragePlace())
            case 2:
                return new Milk(this.GetRandomDeliveryTime(),<StoragePlace>this.GetRandomStoragePlace())
            case 3:
                return new Corn(this.GetRandomDeliveryTime(),<StoragePlace>this.GetRandomStoragePlace())
            case 4:
                return new Stew(this.GetRandomDeliveryTime(),<StoragePlace>this.GetRandomStoragePlace())
            case 5:
                return new Fish(this.GetRandomDeliveryTime(),<StoragePlace>this.GetRandomStoragePlace())
            default:
                return 0
            }
    }
    public DoInspection(){
        let list = `  Product  |Delivered at               |Storage place    |S. life days          |Fresh         \n`
        list += `-----------+---------------------------+-----------------+----------------------+----------\n`
        for (let i of this._products) {
            let index = i.properties
            list += getString(<propertiesDict>index)
        }
        list += `-----------+---------------------------+-----------------+----------------------+----------\n`
        return list

    }
    private GetRandomDeliveryTime():Date {
        return new Date(Date.now() -(86400000 * getRandomNumber(1, 200)))
    }
    private GetRandomStoragePlace() {
        switch (getRandomNumber(1, 2)){
            case 1:
                return StoragePlace.Icebox
            case 2:
                return StoragePlace.Showcase
            default:
                return 0
        }

    }
}
const store:Store = new Store()
console.log( store.DoInspection())
