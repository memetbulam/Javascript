<?php
function adminer_object() {
  
  class AdminerSoftware extends Adminer {
    
    function permanentLogin() {
      // key used for permanent login
      return '3b876f4113f22e86cf7232f0864e5093';
    }
    
    function credentials() {
      // server, username and password for connecting to database
      // return array('localhost', 'ODBC', '');
    }
    
    function login($login, $password) {
      // validate user submitted credentials
      return ($login == 'admin' && $password == '135789');
    }
  }
  
  return new AdminerSoftware;
}

include './adminer-4.8.1.php';