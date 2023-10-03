<?php
/**
 * Plugin Name: WSUWP People
 * Description: A WordPress plugin to index and display people.
 * Version: 0.0.1
 * Requires PHP: 7.0
 * Author: Washington State University, Danial Bleile
 * Author URI: https://github.com/wsuwebteam/wsuwp-plugin-people
 * Text Domain: wsuwp-plugin-people
 */


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


// Initiate plugin
require_once __DIR__ . '/includes/plugin.php';
