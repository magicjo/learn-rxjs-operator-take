// RxJS v6+
import { interval } from "rxjs";
import { take } from "rxjs/operators";

/*
 Filtering Operator: take
 -----------------------

 Takes the first **count** values from the source, then completes.
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
console.log("[start]");
example.subscribe({
  complete: () => console.log("[complete]"),
  error: err => console.error("[error] : ", err),
  next: value => console.log("[next] : ", value)
});
