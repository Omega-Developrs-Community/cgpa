function append(){
    var nos = document.getElementById("papers").value;
    for ( let i = 0; i < nos-1 ; i++){
        var itm = document.getElementById('select1');
        var cln = itm.cloneNode(true);
      
        document.getElementById('options').appendChild(cln);
        var itm1 = document.getElementById('select2');
        cln = itm1.cloneNode(true);
        document.getElementById('options').appendChild(cln);
    }
}
function clear1(){

    var itm2 = document.getElementsByClassName('select1');
    var itm3 = document.getElementsByClassName('select2');
    var elem;
    for ( let i = itm2.length-1; i > 0  ; i--){
        elem = itm2[i];
        elem.parentNode.removeChild(elem);
    }
    for ( let i = itm3.length-1; i > 0  ; i--){
        elem = itm3[i];
        elem.parentNode.removeChild(elem);
    }

}
function calculate(){
    var arr  = document.getElementsByClassName('select1');
    var arr1  = document.getElementsByClassName('select2');
    var arrval = [] ;
    var arrval1 = [];
    var totalcredits=0;
    var totalproduct=0;
    for ( let j=0; j < arr.length ; j++){
        arrval[j] = Number(arr[j].value) ;
    }
    for ( let k=0; k < arr1.length ; k++){
        arrval1[k] = arr1[k].value; 
        totalcredits += arrval[k] ;
        totalproduct += arrval[k]*arrval1[k];
    }
 alert(totalcredits);
 alert(totalproduct);
 alert((totalproduct/totalcredits).toPrecision(4));
}