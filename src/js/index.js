function calculateValues(key) {
    var nodeListScreen = document.getElementsByClassName('screenTop-screen');//Get elements of the scren-screenTop
    var nodeTextScreen = nodeListScreen[0].firstChild;//Get first element of the list of nodes
    try {
        switch (key) {//Evaluate key value
            case 'C'://If key is equals to 'C', then clear screen with ' '
                nodeTextScreen.nodeValue = ' ';
                break;
            case '='://If key is equals to "=",then use eval() function to evaluate the string as an arithmetic function and render in the screen
                var result = eval(nodeTextScreen.nodeValue);
                nodeTextScreen.nodeValue = result;
                break;
            default://By defaul just cancatenate the typed keys
                nodeTextScreen.nodeValue = nodeTextScreen.nodeValue + key;
                break;
        }
    } catch (error) {//In case of error
        alert("Invalid operation, try again!");
        nodeTextScreen.nodeValue = ' ';
    }
}