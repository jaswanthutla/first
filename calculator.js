let billamount = document.getElementById("billAmount");
let percentage = document.getElementById("percentageTip");
let errormsg = document.getElementById("errorMessage");

function calculatebut() {
    let billvalue = parseInt(billamount.value);
    let percentagevalue = parseInt(percentage.value);
    if (billamount.value === "") {
        errormsg.textContent = "Please Enter a valid Input";
    } else if (percentage.value === "") {
        errormsg.textContent = "Please Enter a valid Input";
    } else {
        let tipamount = parseInt(((percentagevalue) / 100) * billvalue);
        document.getElementById("tipAmount").value = parseInt(tipamount);
        let total = tipamount + billvalue;
        document.getElementById("totalAmount").value = total;
        errormsg.textContent = "";
    }
}