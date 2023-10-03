<?php namespace WSUWP\Plugin\People;

class Directory {

	protected $post_obj   = false;
	protected $post_id    = false;
	protected $title      = '';
	protected $people_ids = array();

	public function __construct( $post_el, $in_loop = false ) {

		if ( $post_el instanceof \WP_Post ) {

			$this->set_post( $post_el, $in_loop );

		}

	}


	protected function set_post( $post_el, $in_loop = false ) {

		$this->post_id  = $post_el->ID;
		$this->post_obj = $post_el;

		if ( $in_loop ) {

			$this->title = apply_filters( 'the_title', get_the_title() );

		}

		$people = get_post_meta( $post_el->ID, 'wsu_people', true );

		$people_array = explode(',', $people );

		$this->people_ids = array_map( 'intval', $people_array );

	}


	public function get_directory_array( $fields = array() ) {

		$directory = array(
			'title'      => $this->title,
			'id'         => $this->post_id,
			'peopleIDs' => $this->people_ids,
		);

		if ( ! empty( $fields ) ) {

			foreach ( $directory as $key => $value ) {

				if ( ! in_array( $key, $fields, true ) ) {

					unset( $directory[ $key ] );

				}
			}
		}

		return $directory;

	}

}
