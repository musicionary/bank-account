function Bank (name, balance) {
  this.name = name;
  this.balance = balance;
}

Bank.prototype.withdraw = function(input) {
  return this.balance -= input;
}

Bank.prototype.deposit = function(input) {
  return this.balance += input;
}


function resetFields() {
    $("input#name").val("");
    $("input#init-deposit").val("");
    $("input#deposit").val("");
    $("input#withdrawal").val("");
}

$(document).ready(function() {
  var newAccount;
  $("#new-account").submit(function(event){
    event.preventDefault();

    var name = $("input#name").val();
    var initialDeposit = parseFloat($("#init-deposit").val());

    newAccount = new Bank(name, initialDeposit);

    resetFields();

    $(".current-balance p").text(newAccount.balance);
  });

  $("#deposit").submit(function(event){
    event.preventDefault();

    var deposit = parseFloat($("input#deposit").val());
    newAccount.deposit(deposit);

    resetFields();
    $(".current-balance p").text(newAccount.balance);
  });

  $("#withdraw").submit(function(event){
    event.preventDefault();
    var withdraw = parseFloat($("input#withdrawal").val());

    newAccount.withdraw(withdraw);
    resetFields();
    $(".current-balance p").text(newAccount.balance);
  });
});
