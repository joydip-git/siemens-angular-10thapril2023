import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'uppercaseconverter'
})
export class UppercaseConverterPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        return value !== '' ? value.toLocaleUpperCase() : value;
    }
}