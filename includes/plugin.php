<?php namespace WSUWP\Plugin\People;

class Plugin {


	private static $version = '0.0.1';


	public static function get( $property ) {

		switch ( $property ) {

			case 'version':
				return self::$version;

			case 'dir':
				return plugin_dir_path( dirname( __FILE__ ) );

			case 'url':
				return plugin_dir_url( dirname( __FILE__ ) );

			default:
				return '';

		}

	}

	public static function init() {

		$plugin_dir = self::get( 'dir' );

		// Classes
		require_once $plugin_dir . '/classes/class-directories.php';
		require_once $plugin_dir . '/classes/class-api.php';
		require_once $plugin_dir . '/classes/class-directory.php';
		require_once $plugin_dir . '/classes/class-people.php';
		require_once $plugin_dir . '/classes/class-person.php';

		// Includes
        require_once __DIR__ . '/post-type-directory.php';
        require_once __DIR__ . '/blocks.php';
		require_once __DIR__ . '/scripts.php';
		require_once __DIR__ . '/api-endpoints-directory.php';
		require_once __DIR__ . '/api-endpoints-people.php';
		require_once __DIR__ . '/api-endpoints-taxonomy.php';

	}

}

Plugin::init();
