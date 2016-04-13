import test from 'ava';
import builtins from '.';

test('return an array of modules', t => t.pass(Array.isArray(builtins)));
test('define new electron facade', t => t.pass(builtins.indexOf('electron') !== -1));
test('define deprecated exported modules', t => t.pass(builtins.indexOf('app') !== -1));
test('bring your own node builtins', t => t.pass(builtins.indexOf('fs') === -1));
