//from https://stackoverflow.com/questions/32540044/html-display-current-date on how to set up the date

You have to get the individual components from the date object (day, month & year) and then build and format the string however you wish.

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
<article class = "row" id="date">
