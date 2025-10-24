/**
 * Calculadora simple para demostración
 */

export function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los argumentos deben ser números');
  }
  return a + b;
}

export function restar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los argumentos deben ser números');
  }
  return a - b;
}

export function multiplicar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los argumentos deben ser números');
  }
  return a * b;
}

export function dividir(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los argumentos deben ser números');
  }
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
}
