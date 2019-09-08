import { Pipe, PipeTransform } from "@angular/core";
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { Source } from 'webpack-sources';

@Pipe ({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(sources,value) {
        return sources.filter(source => {
            let sourceToLower = source.name.toLowerCase()
            return sourceToLower.includes(value.toLowerCase())
        })
    }
}