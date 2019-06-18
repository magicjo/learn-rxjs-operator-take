// RxJS v6+
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

/*
 Fitering Operator: take
 -----------------------

 Operator to capture only the first N emitted values from a source.
 ```
 take(count: number): Observable
 ```

 http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-take
*/

// Emit: 0, 1, 2, ... (every 1s)
const source = interval(1000);

// Take the first 5 emitted values and complete
const example = source.pipe(take(5));

// Receive: 0, 1, 2, 3, 4
console.log('[start]')
example.subscribe({
  next: value => console.log('[next] : ', value),
  error: err => console.error('[error] : ', err),
  complete: () => console.log('[complete]')
});
