import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/timer';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';

import { Observable } from 'rxjs/Observable';

export const delayAtLeast = (delay: number) => <T>(source: Observable<T>) => {
    return Observable.combineLatest(
        Observable.timer(delay),
        source)
        .map(([_, i]) => i);
};
