
const data = require('./data');

// Converte a sigla de um estado para o nome completo
const shortToState = (short) => {
  const stateObj = data.states.find((state) => state.short === short);
  return stateObj.name;
};

const mapCities = () => {
  let map = {};

  for (let city of data.cities) {
    // 'Puxando' as propriedades da cidade atual
    const { name, region, state } = city;

    // Caso a região da cidade não esteja em 'map' ainda, inicializar um array
    if (!map[region]) map[region] = [];

    // Adicionar a cidade na sua respectiva região
    map[region].push({
      city: name,
      state: shortToState(state),
    });
  }

  return map;
};

console.log(mapCities());