import test from 'ava';


function trimAll(string) {
    return string.replace(/[\s\b]/g, '');
}

test('trimAll testing', t => {
    t.is(trimAll('Barrior'), 'Barrio')
})