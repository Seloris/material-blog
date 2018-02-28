import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-sandbox-page',
    templateUrl: './sandbox-page.component.html',
    styleUrls: ['./sandbox-page.component.scss'],
})
export class SandboxPageComponent implements OnInit {
    currentMarkDown: string;

    constructor(private http: HttpClient) { }

    ngOnInit() {
    }

    useSample() {
        this.http.get('/assets/sample.md', { responseType: 'text' }).subscribe((sampleMd) => {
            this.currentMarkDown = sampleMd;
        });
    }

}