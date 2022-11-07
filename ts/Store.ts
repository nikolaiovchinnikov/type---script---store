type str = string
type num = number
type bool = boolean
import { Product } from "./Product.js"
import { Salt } from "./productsClass/Salt.js"
import { Stew } from "./productsClass/Stew.js"
import { Corn } from "./productsClass/Corn.js"
import { Milk } from "./productsClass/Milk.js"
import { Fish } from "./productsClass/Fish.js"
import { getRandomNumber } from "./getRandomNumber.js"//импортировал функцию которая возвращает рандомное число
import { StoragePlace } from "./StoragePlace.js"

class Store {
    public _products:Array<Product> = []
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
        for (let i of this._products) {
            console.log(i.IsFresh())
            
        }

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
store.DoInspection()
// console.log(store._products)