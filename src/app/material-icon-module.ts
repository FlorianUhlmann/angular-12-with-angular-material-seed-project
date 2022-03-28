import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

const materialModules = [
    MatIconModule
];

@NgModule({
    exports: [
        ...materialModules
    ],
})

export class MaterialIconModule { }