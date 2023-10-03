<?php namespace WSUWP\Plugin\People;

class People {


	protected static $people_post_type = 'wsuwp_people_profile';


	public static function get_people_by_ids( $people_ids, $directory_id = false, $args = array() ) {

		$default_args = array(
			'fields'       => array(),
			'keep_order'   => false,
		);

		$args = shortcode_atts( $default_args, $args );

		$people_query = array(
			'post_type'      => 'wsuwp_people_profile',
			'posts_per_page' => -1,
			'post__in'       => $people_ids,
		);

		if ( $args['keep_order'] ) {

			$people_query['orderby'] = 'post__in';

		}

		$people = self::get_people_query( $people_query, $directory_id, $args );

		return $people;

	}


	private static function get_people_query( $query_args, $directory_id = false, $args ) {

		$default_args = array(
			'fields'       => array(),
		);

		$args = shortcode_atts( $default_args, $args );

		$people = array();

		$people_query = new \WP_Query( $query_args );

		// The Loop.
		if ( $people_query->have_posts() ) {

			while ( $people_query->have_posts() ) {

				$people_query->the_post();

				$people[] = new Person( $people_query->post, $directory_id, true );

			}
		}

		// Restore original Post Data.
		wp_reset_postdata();

		return $people;

	}


	public static function get_format( $people, $format ) {

		$people_array = array();

		foreach ( $people as $person ) {

			$people_array[] = $person->get_format( $format );
		}

		return $people_array;

	}


	public static function get_directory_people( $directory_id, $include_children = true ) {

		$directory = Directories::get_directory_by_id( $directory_id );

		$directories = array( $directory );

		if ( ! empty( $include_children ) ) {

			$child_directories = Directories::get_child_directories( $directory_id );

			$directories = array_merge( $directories, $child_directories );

			$people_ids = Directories::get_people_ids_from_directories( $directories );

			$people = self::get_people_by_ids( $people_ids, $directory_id );

		}

		$people = self::get_format( $people, $format );

		return $people;

	}


	public static function search_people( $term, $args = array() ) {

		if ( empty( $term ) ) {

			return array();

		}

		$default_args = array(
			'fields'       => array(),
		);

		$args = shortcode_atts( $default_args, $args );

		$people_query = array(
			'post_type'      => 'wsuwp_people_profile',
			'posts_per_page' => 10,
			's'              => $term,
		);

		return self::get_people_query( $people_query, false, $args );

	}


	public function get_people_by_taxonomy( $taxonomies, $args = array() ) {

		$default_args = array(
			'fields' => array(),
		);

		$args = shortcode_atts( $default_args, $args );

		if ( empty( $taxonomies ) ) {

			return array();

		}

		$people_query = array(
			'post_type'      => self::$people_post_type,
			'posts_per_page' => -1,
			'tax_query' => array(
				'relation' => 'AND',
			),
		);

		foreach ( $taxonomies as $taxonomy => $term ) {

			$people_query['tax_query'][] = array(
				'taxonomy' => $taxonomy,
				'terms'    => $term,
			);

		}

		$people = self::get_people_query( $people_query, false, $args );

		return $people;

	}


	/*public static function get_directory_people( $args ) {

		$default_args = array(
			'directory_id' 	   => false,
			'format'           => 'object',
			'include_children' => true,
		);

		$args = shortcode_atts( $default_args, $args );

		$directories = Directories::get_directories( $args['directory_id'] );

	}


	public static function get_people_by_ids( $people_ids, $args ) {

		$default_args = array(
			'directory_id' => false,
			'format'       => 'object',
			'fields'       => array(),
			'keep_order'   => false,
		);

		$args = shortcode_atts( $default_args, $args );

		$people_query = array(
			'post_type'      => 'wsuwp_people_profile',
			'posts_per_page' => -1,
			'post__in'       => $people_ids,
		);

		if ( $args['keep_order'] ) {

			$people_query['orderby'] = 'post__in';

		}

		$people = self::get_people_query( $people_query, $args );

		switch ( $args['format'] ) {

			default:
				return $people;
		}

	}









	public static function get_people( $people_ids, $args ) {

		$default_args = array(
			'directory_id' => false,
			'fields'       => array(),
			'keep_order'   => false,
			'is_api'       => false,
		);

		$args = shortcode_atts( $default_args, $args );

		$people_ids = array_map( 'intval', $people_ids );

		$people_query = array(
			'post_type'      => 'wsuwp_people_profile',
			'posts_per_page' => -1,
			'post__in'       => $people_ids,
		);

		if ( $args['keep_order'] ) {

			$people_query['orderby'] = 'post__in';

		}

		return self::get_people_query( $people_query, $args );

	}


	public function get_people_by_taxonomy( $args, $format = 'object' ) {

		$default_args = array(
			'taxonomies' => array(),
		);

		$args = shortcode_atts( $default_args, $args );

		if ( empty( $args['taxonomies'] ) ) {

			return array();

		}

		$people_query = array(
			'post_type'      => self::$people_post_type,
			'posts_per_page' => -1,
			'tax_query' => array(
				'relation' => 'AND',
			),
		);

		foreach ( $args['taxonomies'] as $taxonomy => $term ) {

			$people_query['tax_query'][] = array(
				'taxonomy' => $taxonomy,
				'terms'    => $term,
			);

		}

		$people = self::get_people_query( $people_query, $args );

		switch ( $format ) {

			case 'ids':
				return self::get_people_ids_format( $people );
			default:
				return $people;

		}

	}


	public static function search_people( $term, $args ) {

		if ( empty( $term ) ) {

			return array();

		}

		$default_args = array(
			'fields'       => array(),
			'is_api'       => false,
		);

		$args = shortcode_atts( $default_args, $args );

		$people_query = array(
			'post_type'      => 'wsuwp_people_profile',
			'posts_per_page' => 10,
			's'              => $term,
		);

		return self::get_people_query( $people_query, $args );

	}


	private static function get_people_query( $query_args, $args ) {

		$default_args = array(
			'directory_id' => false,
			'fields'       => array(),
			'is_api'       => false,
		);

		$args = shortcode_atts( $default_args, $args );

		$people = array();

		$people_query = new \WP_Query( $query_args );

		// The Loop.
		if ( $people_query->have_posts() ) {

			while ( $people_query->have_posts() ) {

				$people_query->the_post();

				$person = new Person( $people_query->post, $args['directory_id'], true );

				if ( $args['is_api'] ) {

					$people[] = $person->get_person_array( $args['fields'] );

				} else {

					$people[] = $person;

				}
			}
		}

		// Restore original Post Data.
		wp_reset_postdata();

		return $people;

	}


	public static function get_people_ids_format( $people ) {

		$people_ids = array();

		foreach ( $people as $person ) {

			$people_ids[] = $person->get( 'id' );

		}

		return $people_ids;

	}


	/*public static function get_people_people( $people_id ) {

	}


	public static function get_people_search( $term, $is_api = false, $fields = array() ) {

		if ( empty( $term ) ) {

			return array();

		}

		$people_query = array(
			'post_type'      => 'wsuwp_people_profile',
			'posts_per_page' => 10,
			's'              => $term,
		);

		return self::get_people_query( $people_query, $is_api, $fields );

	}


	public static function get_people_by_ids( $people_ids, $is_api = false, $fields = array() ) {

		if ( empty( $people_ids ) ) {

			return array();

		}

		$people_ids = array_map( 'intval', $people_ids );

		$people_query = array(
			'post_type'      => 'wsuwp_people_profile',
			'posts_per_page' => -1,
			'post__in'       => $people_ids,
		);

		return self::get_people_query( $people_query, $is_api, $fields );

	}


	*/

}