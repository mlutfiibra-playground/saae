import MY_AXIOS from './index';

export default {
  getWeather(city) {
    return MY_AXIOS.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ff4e2fa6c87cdf3c077e6eb3b9bc719`
    );
  },
};
