import {of} from 'rxjs';
import {map} from 'rxjs/operators';

export const data = ['Dog', 'Cat', 'Fish'];

export const source = of(data);

source.subscribe(list => {
	console.log(list);
});
