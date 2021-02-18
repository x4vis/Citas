export const timeFormat = (timeString = '', withSeconds = false, ) => {

  const time = new Date(timeString);
  const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();

  let formatedTime;
  withSeconds ?
  formatedTime = `${hours}:${minutes}:${seconds}` :
  formatedTime = `${hours}:${minutes}`;

  return formatedTime;
}