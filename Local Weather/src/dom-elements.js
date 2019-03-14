let long;
let lang;
let temperatureDescription = document.querySelector(`.temperature-description`);
let temperatureDegree = document.querySelector(`.temperature-degree`);
let locationTimezone = document.querySelector(`.location-timezone`);
let iconClass = document.querySelector(`.icon`);
let temperatureSection = document.querySelector(`.degree-section`);
let temperatureSpan = temperatureSection.querySelector(`span`);
let humidity = document.querySelector(`.humidity-title`);
let loadingIcon = document.querySelector(`.loading-icon`);
let time = document.querySelector(`.time-result`);

export const DomElements = {
  long,
  lang,
  temperatureDescription,
  temperatureDegree,
  locationTimezone,
  iconClass,
  temperatureSection,
  temperatureSpan,
  humidity,
  loadingIcon,
  time
};

