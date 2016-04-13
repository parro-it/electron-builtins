const test = require('ava');
const electronBuiltins = require('./');

test('it work!', t => {
	const result = electronBuiltins();
	t.is(result, 42);
});
