// Pruebas E2E (de extremo a extremo) de la calculadora con Cypress.
// "describe" agrupa todas las pruebas que se hacen sobre la misma aplicación.
describe('Pruebas E2E de la Calculadora', () => {

  // "beforeEach" se ejecuta antes de CADA prueba.
  // Abre Calculadora.html desde cero para que una prueba no afecte a la otra.
  beforeEach(() => {
    cy.visit('Calculadora.html');
  });

  // PRUEBA 1: SUMA
  // "it" define una prueba individual: lo que se espera que haga la calculadora.
  it('Debe realizar una suma correctamente (7 + 8 = 15)', () => {
    // cy.contains('button', 'X') busca un botón que tenga ese texto
    // y .click() simula que el usuario le hace clic.
    cy.contains('button', '7').click();
    cy.contains('button', '+').click();
    cy.contains('button', '8').click();
    cy.contains('button', '=').click();
    // cy.get('#current-operand') obtiene la pantalla de la calculadora por su id.
    // .should('have.text', '15') verifica que muestre exactamente 15.
    // Si muestra otro valor, la prueba falla (sale en rojo).
    cy.get('#current-operand').should('have.text', '15');
  });

  // PRUEBA 2: RESTA
  it('Debe realizar una resta correctamente (9 - 4 = 5)', () => {
    // Se hace la secuencia de clics igual que lo haría una persona: 9, -, 4 y =.
    cy.contains('button', '9').click();
    cy.contains('button', '-').click();
    cy.contains('button', '4').click();
    cy.contains('button', '=').click();
    // El resultado esperado de 9 - 4 es 5.
    cy.get('#current-operand').should('have.text', '5');
  });

  // PRUEBA 3: MULTIPLICACIÓN
  it('Debe realizar una multiplicación correctamente (6 × 7 = 42)', () => {
    cy.contains('button', '6').click();
    // El símbolo debe ser igual al del botón en el HTML (× o *).
    cy.contains('button', '×').click();
    cy.contains('button', '7').click();
    cy.contains('button', '=').click();
    // El resultado esperado de 6 × 7 es 42.
    cy.get('#current-operand').should('have.text', '42');
  });

  // PRUEBA 4: DIVISIÓN
  it('Debe realizar una división correctamente (8 ÷ 2 = 4)', () => {
    cy.contains('button', '8').click();
    // El símbolo debe ser igual al del botón en el HTML (÷ o /).
    cy.contains('button', '÷').click();
    cy.contains('button', '2').click();
    cy.contains('button', '=').click();
    // El resultado esperado de 8 ÷ 2 es 4.
    cy.get('#current-operand').should('have.text', '4');
  });

  // PRUEBA 5: BORRAR UN DÍGITO
  it('Debe borrar un dígito con el botón DEL (123 → 12)', () => {
    // Se escribe el número 123 con tres clics.
    cy.contains('button', '1').click();
    cy.contains('button', '2').click();
    cy.contains('button', '3').click();
    // DEL elimina solo el último dígito, no toda la pantalla.
    cy.contains('button', 'DEL').click();
    // Si DEL funciona, la pantalla debe mostrar 12.
    cy.get('#current-operand').should('have.text', '12');
  });

  // PRUEBA 6: LIMPIAR TODO
  it('Debe limpiar la pantalla con el botón AC', () => {
    cy.contains('button', '9').click();
    // AC borra todo y deja la pantalla en 0.
    cy.contains('button', 'AC').click();
    cy.get('#current-operand').should('have.text', '0');
  });

  // Prueba nueva: 5 × 5 = 25
it('Multiplica 5 × 5 y muestra 25', () => {
  cy.contains('button', '5').click();
  cy.contains('button', '×').click();
  cy.contains('button', '5').click();
  cy.contains('button', '=').click();
  cy.get('#current-operand').should('have.text', '25');
});
});