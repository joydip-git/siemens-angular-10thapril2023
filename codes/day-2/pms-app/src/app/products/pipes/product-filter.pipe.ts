import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "src/models/product";

@Pipe({
    name: 'productfilter'
})
export class ProductFilterPipe implements PipeTransform {
    //... => rest operator
    transform(value: Product[], ...args: string[]): Product[] {

        if (value.length > 0 && args[0] !== '') {
            const filterText = args[0].toLocaleLowerCase()
            const filteredProducts = value.filter(
                (p) => p.productName.toLocaleLowerCase().indexOf(filterText) !== -1
            )
            return filteredProducts
        } else
            return value;
    }
}