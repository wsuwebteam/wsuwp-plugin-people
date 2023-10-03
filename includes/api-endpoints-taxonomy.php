<?php namespace WSUWP\Plugin\People;


class API_Endpoints_Taxonomy extends API {


	public static function init() {

		add_action( 'rest_api_init', array( __CLASS__, 'register_api_endpoints' ) );

	}


	public static function register_api_endpoints() {


		register_rest_route(
			'directory/api/v1',
			'/taxonomy/get',
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => array( __CLASS__, 'get_taxonomies' ),
				//'permission_callback' => function () { var_dump( is_user_logged_in() ); return current_user_can( 'edit_posts' ); }
			)
		);

		register_rest_route(
			'directory/api/v1',
			'/terms/get',
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => array( __CLASS__, 'get_taxonomy_terms' ),
				//'permission_callback' => function () { var_dump( is_user_logged_in() ); return current_user_can( 'edit_posts' ); }
			)
		);

	}


	public static function user_can_create() {

	}


	public static function get_taxonomies() {

		$taxonomies = get_taxonomies( array( 'public' => true ), 'objects' );

		if ( $taxonomies ) {

			$tax_array = array();

			foreach ( $taxonomies as $slug => $taxonomy ) {

				$tax_array[] = array(
					'label' => $taxonomy->label,
					'value' => $slug,
				);
			};

			return self::respond( $tax_array, true, 'Taxonomies Found' );

		} else {

			return self::respond( array(), false, 'No Taxonomies Found' );

		}

	}

	public static function get_taxonomy_terms() {

		$taxonomy = ( isset( $_REQUEST['taxonomy'] ) ) ? sanitize_text_field( $_REQUEST['taxonomy'] ) : '';

		if ( ! empty( $taxonomy ) ) {

			$terms = get_terms( array(
				'taxonomy'   => $taxonomy,
				'hide_empty' => false,
			) );
	
			if ( $terms ) {
	
				$term_array = array();
	
				foreach ( $terms as $slug => $term ) {
	
					$term_array[] = array(
						'label' => $term->name,
						'value' => $term->term_id,
					);
				};
	
				return self::respond( $term_array, true, 'Terms Found' );
	
			} else {
	
				return self::respond( array(), false, 'No Terms Found' );
	
			}
		}

		return self::respond( array(), false, 'No Taxonomy Supplied' );

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

API_Endpoints_Taxonomy::init();
