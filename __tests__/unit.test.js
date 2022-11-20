// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isPhoneNumber(phoneNumber)
test('valid phoneNumber 1', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phoneNumber 2', () => {
    expect(functions.isPhoneNumber('(923)324-7850')).toBe(true);
});

test('invalid phoneNumber 1', () => {
    expect(functions.isPhoneNumber('12-45-78')).toBe(false);
});

test('invalid phoneNumber 2', () => {
    expect(functions.isPhoneNumber('((111))456))(7890')).toBe(false);
});

// isEmail(email) 
test('valid email 1', () => {
    expect(functions.isEmail('a@y.com')).toBe(true);
});

test('valid email 2', () => {
    expect(functions.isEmail('b@x.edu')).toBe(true);
});

test('invalid email 1', () => {
    expect(functions.isEmail('boy@yamato.long')).toBe(false);
});

test('invalid email 2', () => {
    expect(functions.isEmail('111-222-3333')).toBe(false);
});

// isStrongPassword(password)
test('valid password 1', () => {
    expect(functions.isStrongPassword('a23def7890')).toBe(true);
});

test('valid password 2', () => {
    expect(functions.isStrongPassword('Password')).toBe(true);
});

test('invalid password 1', () => {
    expect(functions.isStrongPassword('1girl')).toBe(false);
});

test('invalid password 2', () => {
    expect(functions.isStrongPassword('3*sJi@kLsd')).toBe(false);
});

// isDate(date)
test('valid date 1', () => {
    expect(functions.isDate('12/1/1234')).toBe(true);
});

test('valid date 2', () => {
    expect(functions.isDate('9/98/9876')).toBe(true);
});

test('invalid date 1', () => {
    expect(functions.isDate('10/4/12')).toBe(false);
});

test('invalid date 2', () => {
    expect(functions.isDate('11-19-2022')).toBe(false);
});

// isHexColor(color)
test('valid hex color 1', () => {
    expect(functions.isHexColor('#a2c')).toBe(true);
});

test('valid hex color 2', () => {
    expect(functions.isHexColor('1f2d0e')).toBe(true);
});

test('invalid hex color 1', () => {
    expect(functions.isHexColor('#12g')).toBe(false);
});

test('invalid hex color 2', () => {
    expect(functions.isHexColor('8f8ea')).toBe(false);
});