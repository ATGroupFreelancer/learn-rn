import {makeAutoObservable} from "mobx";

class ProductStore {
    productList= []
    // filteredProduct = []

    constructor() {
        makeAutoObservable(this)
    }

    addProduct(item) {
        this.productList.push(item);
    }

    setProductList(data) {
        this.productList = data;
        // this.onFilteredProduct()
    }

    // onFilteredProduct() {
    //     const array = this.productList.filter(item => item.priority === 'High');
    //     this.filteredProduct = array;
    // }

    get filteredProduct() {
        return this.productList.filter(item => item.priority === 'High');
    }
}

export const productStore = new ProductStore();