import { Component, Input } from "@angular/core";
import { trigger, style, transition, animate, group } from '@angular/animations';
import { SessionStorage, SessionStorageService } from 'ngx-webstorage';

const storageTag = 'boundArray';

@Component({
    selector: 'app-anim',
    styleUrls: ['app/animations/animations.component.css'],
    templateUrl: 'app/animations/animations.component.html',
    animations: [
        trigger('itemAnim', [
            transition(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate(350)
            ]),
            transition(':leave', [
                group([
                    animate('0.2s ease', style({
                        transform: 'translate(150px,25px)'
                    })),
                    animate('0.5s 0.2s ease', style({
                        opacity: 0
                    }))
                ])
            ])
        ])
    ]
})
export class AppAnimationsComponent {

    // @SessionStorage(storageTag)
    items: string[];

    inputItem: string;

    constructor(private storage: SessionStorageService) {
        this.inputItem = '';
    }

    ngOnInit() {
        this.items = this.storage.retrieve(storageTag) || [];
    }

    addItem() {
        if (this.inputItem == null || ! this.inputItem.trim()) {
            return;
        }

        this.items.push(this.inputItem);
        this.storage.store(storageTag, this.items);
        this.inputItem = '';
    }

    removeItem(oldItem: string) {
        let index: number = this.items.indexOf(oldItem);
        if (index === -1) {
            return;
        }

        this.items.splice(index, 1);
        this.storage.store(storageTag, this.items);
    }
};
