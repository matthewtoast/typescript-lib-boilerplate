import * as tape from 'tape';
import {noop} from '../src/index';

tape('index', (t: tape.Test) => {
  t.ok(noop);
  t.end();
});
