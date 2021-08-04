
import $ from 'jquery';

// const date = document.querySelector('.date');
// const clock = document.querySelector('.clock');
// const clock2 = document.querySelector('.clock2');
	
function getTime(){
    // const clock = document.querySelector('.clock');
    // const clock2 = document.querySelector('.clock2');
    const time = new Date();

    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    var printhour;

    /*10이하면 앞에 0출력*/
    var clock = `${hour<10 ? `0${hour}` :hour}:${minutes<10 ? `0${minutes}` :minutes}:${seconds<10 ? `0${seconds}` :seconds}`

    $('.clock').html(clock);
    // clock2.innerHTML = `${hour<10 ? `0${hour}` :hour}:${minutes<10 ? `0${minutes}` :minutes}:${seconds<10 ? `0${seconds}` :seconds}`
}

function getDate(){
    // const date = document.querySelector('.date');
    const week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');

    const time2 = new Date();

    const year = time2.getFullYear();
    const month = time2.getMonth()+1;
    const day = time2.getDate();

    var date = year + ". "+ month +". " + day +". " + week[time2.getDay()];
    $('.date').html(date);
}
/*1초마다 계속 업데이트*/
function init(){
    setInterval(getDate, 1000);
    setInterval(getTime, 1000);
}
// $('.date').append(date);

init();
