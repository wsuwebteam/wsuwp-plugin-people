<?php namespace WSUWP\Plugin\People;

class Directories {


	public static function get_directory_by_id( $directory_id ) {

		$directory_post = get_post( $directory_id );

		return new Directory( $directory_post );

	}


	public static function get_child_directories( $directory_id ) {

		$directories = array();

		$directory_posts = get_pages(
			array(
				'child_of'  => $directory_id,
				'post_type' => Post_Type_Directory::get( 'post_type' ),
			)
		);

		foreach ( $directory_posts as $directory ) {

			$directories[] = new Directory( $directory );
		}

		return $directories;

	}


	public static function get_people_ids_from_directory( $directory ) {

		return $directory->get( 'people_ids' );

	}

	public static function get_people_ids_from_directories( $directories ) {

		$people_ids = array();

		foreach ( $directories as $directory ) {

			$directory_people = self::get_people_ids_from_directory( $directory );

			$people_ids = array_merge( $people_ids, $directory_people );

		}

		return array_unique( $people_ids );

	}


	public static function get_format( $directories, $format ) {

		$directories_array = array();

		foreach ( $directories as $directory ) {

			$directories_array[] = $directory->get_format( $format );
		}

		return $directories_array;

	}


	public static function create_directory( $parent_id, $title ) {

		$directory = array(
			'post_title'    => $title,
			'post_parent'   => $parent_id,
			'post_type'     => Post_Type_Directory::get( 'post_type' ),
			'post_status'   => 'publish',
			'post_content'  => '<!-- wp:wsuwp/wsu-directory /-->',
		);

		// Insert the post into the database
		return wp_insert_post( $directory );

	}


	/*public static function get_directories( $args ) {

		if ( empty( $args['directory_id'] ) ) {

			return array();

		}

		$default_args = array(
			'directory_id'     => false,
			'format'           => 'object',
			'include_children' => true,
			'fields'           => array(),
		);

		$args = shortcode_atts( $default_args, $args );


		$directories = array();

		$directories[] = self::get_directory_by_id( $args['directory_id'] );

		if ( $args['include_children'] ) {

			$child_directories = self::get_child_directories_by_id( $args['directory_id'] );

		}

		switch ( $args['format'] ) {

			default:
				return $directories;

		}

	}

	
	public static function get_directory_by_id( $directory_id ) {

		$directory_post = get_post( $directory_id );

		return new Directory( $directory_post );

	}

	public static function get_child_directories_by_id( $directory_id ) {

		$directories = array();

		$directory_posts = get_pages(
			array(
				'child_of'  => $directory_id,
				'post_type' => Post_Type_Directory::get( 'post_type' ),
			)
		);

		foreach ( $directory_posts as $directory ) {

			$directories[] = new Directory( $directory );
		}

		return $directories;

	}


	protected static function query_directories( $query_args, $args ) {

		$directories = array();

		$directory_query = new \WP_Query( $query_args );

		// The Loop.
		if ( $directory_query->have_posts() ) {

			while ( $directory_query->have_posts() ) {

				$directory_query->the_post();

				$directory = new Directory( $directory_query->post, true );

				$directories[] = $directory;

			}
		}

		// Restore original Post Data.
		wp_reset_postdata();

		return $directories;

	}


	protected static function get_query_args( $args ) {

		$query_args = array(
			'post_type'      => Post_Type_Directory::get( 'post_type' ),
			'posts_per_page' => -1,
		);

	}


	public static function get_child_directories( $parent_id, $is_api = false, $fields = array() ) {

		if ( empty( $parent_id ) ) {

			return array();

		}

		$directories = array();

		$directory_query = new \WP_Query(
			array(
				'post_parent'    => $parent_id,
				'post_type'      => Post_Type_Directory::get( 'post_type' ),
				'posts_per_page' => -1,
			)
		);

		// The Loop.
		if ( $directory_query->have_posts() ) {

			while ( $directory_query->have_posts() ) {

				$directory_query->the_post();

				$directory     = new Directory( $directory_query->post, true );

				if ( $is_api ) {

					$directories[] = $directory->get_directory_array( $fields );

				} else {

					$directories[] = $directory;

				}
			}
		} 

		// Restore original Post Data.
		wp_reset_postdata();

		return $directories;

	}

	public static function create_directory( $parent_id, $title ) {

		$directory = array(
			'post_title'    => $title,
			'post_parent'   => $parent_id,
			'post_type'     => Post_Type_Directory::get( 'post_type' ),
			'post_status'   => 'publish',
			'post_content'  => '<!-- wp:wsuwp/wsu-directory /-->',
		);

		// Insert the post into the database
		return wp_insert_post( $directory );

	}

	/*public static function get_child_directories( $parent_id, $is_api = false, $fields = array() ) {

		if ( empty( $parent_id ) ) {

			return array();

		}

		$directories = array();

		$directory_query = new \WP_Query(
			array(
				'post_parent'    => $parent_id,
				'post_type'      => Post_Type_Directory::get( 'post_type' ),
				'posts_per_page' => -1,
			)
		);

		// The Loop.
		if ( $directory_query->have_posts() ) {

			while ( $directory_query->have_posts() ) {

				$directory_query->the_post();

				$directory     = new Directory( $directory_query->post, true );

				if ( $is_api ) {

					$directories[] = $directory->get_directory_array( $fields );

				} else {

					$directories[] = $directory;

				}
			}
		} 

		// Restore original Post Data.
		wp_reset_postdata();

		return $directories;

	}


	public static function get_directory( $post_id, $is_api = false, $fields = array() ) {

		if ( empty( $post_id ) ) {

			return false;

		}

		$directories = array();

		$directory_query = new \WP_Query(
			array(
				'post_type'      => Post_Type_Directory::get( 'post_type' ),
				'p'              => $post_id,
			)
		);

		// The Loop.
		if ( $directory_query->have_posts() ) {

			while ( $directory_query->have_posts() ) {

				$directory_query->the_post();

				$directory     = new Directory( $directory_query->post, true );

				if ( $is_api ) {

					$directories[] = $directory->get_directory_array( $fields );

				} else {

					$directories[] = $directory;

				}
			}
		} 

		// Restore original Post Data.
		wp_reset_postdata();

		return $directories;

	}*/

}
