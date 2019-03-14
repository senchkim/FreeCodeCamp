export const setIcons = (icon, iconId) => {
  const skycons = new Skycons({color: `white`});
  const currentIcon = icon.replace(/-/g, `_`).toUpperCase();
  skycons.play();
  return skycons.set(iconId, Skycons[currentIcon]);
};
