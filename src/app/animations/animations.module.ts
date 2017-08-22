import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2Webstorage} from 'ngx-webstorage';

import { AppAnimationsComponent } from './animations.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        Ng2Webstorage       
    ],
    declarations: [
        AppAnimationsComponent
    ],
    exports: [
        AppAnimationsComponent
    ]
})
export class AnimationsModule {}
