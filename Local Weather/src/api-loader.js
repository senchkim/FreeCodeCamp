import {DomElements} from './dom-elements';
import {setIcons} from './sky-icon';
import {checkStatus} from './utils';

export default () => {
  const IP_ADDRESS = `http://ip-api.com/json/?lang=ru`;

  fetch(IP_ADDRESS)
      .then((response) => {
        checkStatus(response);
        return response.json();
      })
      .then((info) => {
        getWeather(info);
        return info;
      })
      .catch(() => {
        throw new Error(`Ошибка загрузки координат`);
      });


  const getWeather = (info) => {
    const PROXY = `http://cors-anywhere.herokuapp.com/`;
    const SERVER_URL = `${PROXY}https://api.darksky.net/forecast/b98222b08931b71b870ceb8cee2a72cb/${info.lat},${info.lon}`;

    fetch(SERVER_URL)
      .then((response) => {
        checkStatus(response);
        return response.json();
      })
      .then((data) => {
        const {temperature, summary, icon, humidity, time} = data.currently;
        DomElements.temperatureDegree.textContent = Math.round(temperature);
        DomElements.temperatureDescription.textContent = summary;
        DomElements.locationTimezone.textContent = data.timezone;
        DomElements.humidity.textContent = Math.round(humidity * 100);
        const currentTime = new Date(+time * 1000).toLocaleDateString();
        DomElements.time.textContent = currentTime;

        setIcons(icon, DomElements.iconClass);

        let celcius = Math.floor((temperature - 32) * (5 / 9));
        DomElements.temperatureSection.addEventListener(`click`, () => {
          if (DomElements.temperatureSpan.textContent === `F`) {
            DomElements.temperatureSpan.textContent = `C`;
            DomElements.temperatureDegree.textContent = celcius + `°`;
          } else {
            DomElements.temperatureSpan.textContent = `F`;
            DomElements.temperatureDegree.textContent = Math.round(temperature) + `°`;
          }
        });
        DomElements.loadingIcon.classList.add(`loading-icon-none`);
      })
      .catch(() => {
        throw new Error(`Ошибка загрузки данных`);
      });
  };
};
