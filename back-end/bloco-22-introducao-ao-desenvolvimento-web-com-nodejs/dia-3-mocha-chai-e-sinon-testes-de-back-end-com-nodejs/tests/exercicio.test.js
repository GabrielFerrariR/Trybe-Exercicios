const { expect } = require('chai');
const exercicio1 = require('../exercicio1.js');

describe('testa função exercicio1', () => {
	it('retorna positivo quando maior que zero', () => {
		expect(exercicio1(8)).to.be.equal('positivo');
	});
	it('retorna negativo quando menor que zero', () => {
		expect(exercicio1(-10)).to.be.equal('negativo');
	});
	it('retorna neutro quando igual a zero', () => {
		expect(exercicio1(0)).to.be.equal('neutro');
	});
	it('retorna um erro quanto o parametro não for do tipo número', () => {
		expect(() => exercicio1('string')).to.be.throw();
	});
});
