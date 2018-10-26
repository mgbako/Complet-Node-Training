const lib = require('../lib');

describe('absolute', () => {

  it('should return a positive number if input is positive', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });
  
  it('should return a positive number if input is negative', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  
  it('should return a 0 number if input is 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });

});

describe('greet', () => {
  it('should return the greeting message', () => {
    const result = lib.greet('John');
    expect(result).toMatch(/John/);
    expect(result).toContain('John');
  });
});

describe('getCurrency', () => {
  it('should return the true if array contains the value', () => {
    const result = lib.getCurrencies();
    expect(result[0]).toBe('USD');
    expect(result).toContain('AUD');

    expect(result).toEqual(expect.arrayContaining(['USD','AUD','EUR']));
  })
});

describe('getProduct', () => {
  it('should return the product with the given id', () => {
    const result = lib.getProduct(1);
    // expect(result).toEqual({id:1, price: 10});

    expect(result).toMatchObject({id:1, price: 10});
    expect(result).toHaveProperty('id', 1);
  })
})