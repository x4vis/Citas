export const dateFormat = (datestring = '', monthNumberFormat = true) => {

  var  months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "October", "November", "December"];

  const date = new Date(datestring);
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  let month;
  monthNumberFormat ? 
  month = months[date.getMonth()] : 
  month = date.getMonth() < 10 ? `0${date.getMonth()+1}` : date.getMonth();

  const year = date.getFullYear();
  const formatedDate = `${day} de ${month} del ${year}`;

  return formatedDate;
}