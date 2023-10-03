<?php namespace WSUWP\Plugin\People;

class Directories {

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
