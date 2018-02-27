import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-sandbox-page',
    templateUrl: './sandbox-page.component.html',
    styleUrls: ['./sandbox-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SandboxPageComponent implements OnInit {
    currentMarkDown: string;

    constructor() { }

    ngOnInit() {
    }

}
