<?php
	/*INICIALIZACOES*/
 	session_set_cookie_params(7200, '/');
	session_start();
 	$BASE_DIR = '/app/';
  	$BASE_URL = 'http://guia-spmi.herokuapp.com/';
  	$BASE_ANT = $_SERVER['HTTP_REFERER'];
  	
 	
	require($BASE_DIR.'lib/smarty/Smarty.class.php');
	
  
	$smarty = new Smarty;
	$smarty->template_dir = $BASE_DIR.'templates/';
	$smarty->compile_dir = $BASE_DIR.'templates_c/';
	
	/*links base*/
	$smarty->assign('BASE_DIR', $BASE_DIR);
	$smarty->assign('BASE_URL', $BASE_URL);
	$smarty->assign('BASE_ANT', $BASE_ANT);
	
	
?>