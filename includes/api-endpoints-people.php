<?php namespace WSUWP\Plugin\People;


class API_Endpoints_People extends API {


	public static function init() {

		add_action( 'rest_api_init', array( __CLASS__, 'register_api_endpoints' ) );

	}


	public static function register_api_endpoints() {

		if ( is_user_logged_in() ) {

			/*register_rest_route(
				'directory/api/v1',
				'/people-search',
				array(
					'methods' => \WP_REST_Server::READABLE,
					'callback' => array( __CLASS__, 'search_people' ),
					//'permission_callback' => function () { var_dump( is_user_logged_in() ); return current_user_can( 'edit_posts' ); }
				)
			);*/

		}

		register_rest_route(
			'directory/api/v1',
			'/people',
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => array( __CLASS__, 'get_directory_people' ),
				//'permission_callback' => function () { var_dump( is_user_logged_in() ); return current_user_can( 'edit_posts' ); }
			)
		);

		/*register_rest_route(
			'directory/api/v1',
			'/people/get',
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => array( __CLASS__, 'get_people' ),
				//'permission_callback' => function () { var_dump( is_user_logged_in() ); return current_user_can( 'edit_posts' ); }
			)
		);*/

		register_rest_route(
			'directory/api/v1',
			'/people/search',
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => array( __CLASS__, 'search_people' ),
				//'permission_callback' => function () { var_dump( is_user_logged_in() ); return current_user_can( 'edit_posts' ); }
			)
		);

		register_rest_route(
			'directory/api/v1',
			'/people/tax-query',
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => array( __CLASS__, 'get_people_by_taxonomy' ),
				//'permission_callback' => function () { var_dump( is_user_logged_in() ); return current_user_can( 'edit_posts' ); }
			)
		);

	}

	public static function get_people() {

		$directory_id = ( isset( $_REQUEST['directory'] ) ) ? sanitize_text_field( $_REQUEST['directory'] ) : '';
		$people_ids   = ( isset( $_REQUEST['people_ids'] ) ) ? sanitize_text_field( $_REQUEST['people_ids'] ) : '';
		
		$people = People::get_people( explode( ',', $people_ids ), array( 'directory_id' => $directory_id, 'is_api' => true ) );

		return self::respond( $people );

	}


	public static function get_people_by_taxonomy() {

		$taxonomy = ( isset( $_REQUEST['taxonomy'] ) ) ? sanitize_text_field( $_REQUEST['taxonomy'] ) : '';
		$term     = ( isset( $_REQUEST['term'] ) ) ? sanitize_text_field( $_REQUEST['term'] ) : '';
		$format   = ( isset( $_REQUEST['format'] ) && ! empty( $_REQUEST['format'] ) ) ? sanitize_text_field( $_REQUEST['format'] ) : 'array';

		if ( empty( $taxonomy ) || empty( $term ) ) {

			return self::respond( array(), false, 'No term or taxonomy' );
		}

		$tax_array = array();

		$tax_array[ $taxonomy ] = $term;
		
		$people = People::get_people_by_taxonomy( $tax_array );

		$people = People::get_format( $people, $format );

		return self::respond( $people );

	}


	public static function search_people() {

		$term   = ( isset( $_REQUEST['term'] ) ) ? sanitize_text_field( $_REQUEST['term'] ) : '';
		$format = ( isset( $_REQUEST['format'] ) && ! empty( $_REQUEST['format'] ) ) ? sanitize_text_field( $_REQUEST['format'] ) : 'array';

		$people = People::search_people( $term );

		$people = People::get_format( $people, $format );

		return self::respond( $people );

	}


	public static function get_directory_people() {

		$directory_id     = ( isset( $_REQUEST['directory'] ) && ! empty( $_REQUEST['directory'] ) ) ? sanitize_text_field( $_REQUEST['directory'] ) : false;
		$format           = ( isset( $_REQUEST['format'] ) && ! empty( $_REQUEST['format'] ) ) ? sanitize_text_field( $_REQUEST['format'] ) : 'array';
		$include_children = ( isset( $_REQUEST['include_children'] ) ) ? sanitize_text_field( $_REQUEST['include_children'] ) : 1;
		$people_ids       = ( isset( $_REQUEST['people_ids'] ) && ! empty( $_REQUEST['people_ids'] ) ) ? sanitize_text_field( $_REQUEST['people_ids'] ) : '';


		if (  ! empty( $people_ids  ) ) {

			$people_ids = explode( ',', $people_ids );
			$people     = People::get_people_by_ids( $people_ids, $directory_id );
			

		} else {

			$people = People::get_directory_people( $directory_id, $include_children );

		}

		$people = People::get_format( $people, $format );

		return self::respond( $people );

	}


	/*public static function search_people() {

		$search_term = ( isset( $_REQUEST['term'] ) ) ? sanitize_text_field( $_REQUEST['term'] ) : '';

		if ( ! empty( $search_term ) ) {

			$people = People::get_people_search( $search_term, true );

			return self::respond( $people );

		} else {

			return self::respond( array(), false, 'No Search Term Supplied' );

		}

	}

	public static function get_people() {

		$people_ids = ( isset( $_REQUEST['people_ids'] ) ) ? $_REQUEST['people_ids'] : '';


		if ( ! empty( $people_ids ) && is_array( $people_ids ) ) {

			$people = People::get_people_by_ids( $people_ids, true );

			return self::respond( $people );

		} else {

			return self::respond( array(), false, 'No IDs Supplied' );

		}

	}*/

}

API_Endpoints_People::init();
