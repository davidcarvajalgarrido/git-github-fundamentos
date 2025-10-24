import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { sumar, restar, multiplicar, dividir } from './calculator.js';

describe('Calculadora', () => {
  describe('sumar', () => {
    it('debe sumar dos números positivos', () => {
      assert.equal(sumar(2, 3), 5);
    });

    it('debe sumar números negativos', () => {
      assert.equal(sumar(-2, -3), -5);
    });

    it('debe lanzar error si no son números', () => {
      assert.throws(() => sumar('2', 3), Error);
    });
  });

  describe('restar', () => {
    it('debe restar dos números', () => {
      assert.equal(restar(5, 3), 2);
    });

    it('debe manejar resultados negativos', () => {
      assert.equal(restar(3, 5), -2);
    });
  });

  describe('multiplicar', () => {
    it('debe multiplicar dos números', () => {
      assert.equal(multiplicar(4, 5), 20);
    });

    it('debe retornar 0 cuando se multiplica por 0', () => {
      assert.equal(multiplicar(5, 0), 0);
    });
  });

  describe('dividir', () => {
    it('debe dividir dos números', () => {
      assert.equal(dividir(10, 2), 5);
    });

    it('debe lanzar error al dividir por cero', () => {
      assert.throws(() => dividir(10, 0), Error);
    });
  });
});
