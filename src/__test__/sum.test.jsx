import { addToobject, isBoolean, isNumber, sum, toUpperCased } from "../helper/generics"


describe('Pengujian sebuah function dalam folder helper', () => {
  test('Pengujian huruf besar pada string', () => {
    expect(toUpperCased('jhon')).toBe('JHON');
  });

  test('Pengujian is number not string', () => {
    expect(isNumber(1)).toBe('number');
  });

  test('pengujian angka dalam penjumlahan', () => {
    expect(sum(1, 2)).toBe(3)
  })
});

describe('Pengujian bagian 2', () => {
  test('harus boolean', () => {
    expect(isBoolean(false)).toBeFalsy();
  })
  test('harus undefine', () => {
    expect(isBoolean(undefined)).toBeUndefined();
  })
  test('harus null', () => {
    expect(isBoolean(null)).toBeNull();
  })
  test('harus undefine', () => {
    expect(isBoolean([1, 3, 4, 5])).toBeDefined();
  })
})

describe('Pengujian bagian 3', () => {
  test('penambahan sebuah object', () => {
    expect(addToobject({ type: 'age', nums: 30 })).toEqual({ nama: 'jhon doe', age: 30 });
  })
  test('pengujian sebuah nilai yg tidak mungkin kebenarannya', () => {
    expect(sum(5, 5)).not.toBe(0)
  })
})

describe('string method', () => {
  test('cek string search tidak match', () => {
    expect('team').not.toMatch(/I/);
  });

  test('cek string search yang match', () => {
    expect('team').toMatch(/am/);
  });
})