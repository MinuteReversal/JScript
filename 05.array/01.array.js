var arr = new Array();

arr.push(1);
arr.push(2);
arr.push(3);
arr.splice(0, 1); //delete
arr.splice(0, 0, 1); //insert

WScript.Echo(arr);
