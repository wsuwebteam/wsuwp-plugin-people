<?php namespace WSUWP\Plugin\People;


class API_Endpoints_Directory extends API {


	public static function init() {

		add_action( 'rest_api_init', array( __CLASS__, 'register_api_endpoints' ) );

	}


	public static function register_api_endpoints() {

		if ( is_user_logged_in() ) {

			register_rest_route(
				'directory/api/v1',
				'/add',
				array(
					'methods' => \WP_REST_Server::READABLE,
					'callback' => array( __CLASS__, 'add_directory' ),
					//'permission_callback' => function () { var_dump( is_user_logged_in() ); return current_user_can( 'edit_posts' ); }
				)
			);

		}


		register_rest_route(
			'directory/api/v1',
			'/children/get',
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => array( __CLASS__, 'get_directory_children' ),
				//'permission_callback' => function () { var_dump( is_user_logged_in() ); return current_user_can( 'edit_posts' ); }
			)
		);

	}


	public static function user_can_create() {

	}


	public static function add_directory() {

		$directory_parent = (int) sanitize_text_field( $_REQUEST['directory_id'] );
		$directory_title  = sanitize_text_field( $_REQUEST['title'] );

		if ( ! empty( $directory_parent ) && ! empty( $directory_title ) ) {

			$directory_id = Directories::create_directory( $directory_parent, $directory_title );

			//$directories = Directories::get_child_directories( $directory_parent, true );

			return self::respond( array( $directory_id ), true, 'Directory Created' );

		} else {

			return self::respond( false, false, 'Incomplete directory data provided parent_id:title' );

		}

	}


	/*public static function get_directory() {

		$directory_parent = ( isset( $_REQUEST['parent'] ) ) ? (int) sanitize_text_field( $_REQUEST['parent'] ) : false;
		$directory_id     = ( isset( $_REQUEST['directory_id'] ) ) ? (int) sanitize_text_field( $_REQUEST['directory_id'] ) : false;

		if ( ! empty( $directory_parent ) ) {

			$directories = Directories::get_child_directories( $directory_parent, true );

			return self::respond( $directories, true, 'Directories Found' );

		} elseif ( ! empty( $directory_id ) ) {

			$directory = Directories::get_directory( $directory_id, true );

			return self::respond( $directory, true, 'Directory Found' );

		} else {

			return self::respond( false, false, 'Incomplete directory data provided parent_id' );

		}

	}*/


	public static function get_directory_children() {

		$directory_id = ( isset( $_REQUEST['directory_id'] ) ) ? (int) sanitize_text_field( $_REQUEST['directory_id'] ) : false;

		if ( $directory_id ) {

			$directories = Directories::get_child_directories( $directory_id, true );

			return self::respond( $directories, true, 'Directories Found' );

		}

		return self::respond( array(), false, 'No Directories Found' );

	}

}

API_Endpoints_Directory::init();
