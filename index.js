

// //   foir client 1
// var count=0;
// var project=setInterval(project,5)
// function project() {
// count++
// var num1 =document.getElementById("num1").innerHTML=count;
// if(count==200 ){
// clearInterval(project)
// }
// }








// //  for client 2
// var count2=0;
// var project2=setInterval(project2,5)
// function project2() {
// count2++
// var num2 =document.getElementById("num2").innerHTML=count2;
// if(count2==167){
// clearInterval(project2)
// }
// }
// //  for client 3
// var count3=0;
// var project3=setInterval(project3,20)
// function project3() {
// count3++
// var num3 =document.getElementById("num3").innerHTML=count3;

// if(count3==60){
// clearInterval(project3)
// }
// }
// //  for client 4
// var count4=0;
// var project4=setInterval(project4,150)
// function project4() {
// count4++
// var num4 =document.getElementById("num4").innerHTML=count4;
// if(count4==6){
// clearInterval(project4)
// }
// }



'use strict';

const clients = [
    { id: 'num1', count: 0, limit: 200, interval: 5 },
    { id: 'num2', count: 0, limit: 167, interval: 5 },
    { id: 'num3', count: 0, limit: 60, interval: 20 },
    { id: 'num4', count: 0, limit: 6, interval: 150 },
];

clients.forEach(function (client) {
    const interval = setInterval(function () {
        client.count++;
        document.getElementById(client.id).innerHTML = client.count;
        if (client.count == client.limit) {
            clearInterval(interval);
            if (client.id === 'num1') {
                document.getElementById(client.id).innerHTML = client.count + ' + ';
            } else if (client.id === 'num2') {
                document.getElementById(client.id).innerHTML = client.count + ' + ';
            } else if (client.id === 'num3') {
                document.getElementById(client.id).innerHTML = client.count + ' + ';
            } else if (client.id === 'num4') {
                document.getElementById(client.id).innerHTML = client.count + ' + ';
            }
        }
    }, client.interval);
});