import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FilterListPipe } from './search';

@NgModule({
    declarations: [FilterListPipe],
    imports: [
        CommonModule
    ],
    exports: [FilterListPipe]
})
export class PipeModule {
}
