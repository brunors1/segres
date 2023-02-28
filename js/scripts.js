function total() {
    let total = 500;
    let check = document.getElementsByName("checkbox");
    
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
        total += parseInt(check[i].value);
        }
    }
    console.log("R$ " + total);
    }