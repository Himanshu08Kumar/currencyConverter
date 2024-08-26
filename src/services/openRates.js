

const openRates = async (base, symbol) => {
  try {
    if (base === 'EUR' && symbol === 'EUR') {
      return {
        rate: 1,
      };
    } else {
      var myHeaders = new Headers();
      myHeaders.append("apikey", "zse8bNV4BmtxEWv3z9A87p8cmYHAjWv8");
      
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };
      const fetchRates = await fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${symbol}&base=${base}&v=${new Date().getHours()}`, requestOptions);
      const jsonData = await fetchRates.json();
      return Promise.resolve({
        rate: jsonData.rates[symbol],
      });
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default openRates;
