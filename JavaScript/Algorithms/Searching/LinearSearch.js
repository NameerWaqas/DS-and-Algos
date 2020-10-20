function LinearSearch(array,valToSearch){
for(var i=0;i<array.length;i++)
if(valToSearch==array[i]){
	return true
}
return false;
}