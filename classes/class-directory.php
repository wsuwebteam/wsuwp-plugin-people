<?php namespace WSUWP\Plugin\People;

class Directory {

	protected $post_obj   = false;
	protected $post_id    = false;
	protected $title      = '';
	protected $people_ids = array();


	public function get( $property, $default = '' ) {

		switch ( $property ) {

			case 'people_ids':
				return $this->people_ids;
			default:
				return $defalut;

		}

	}

	public function __construct( $post_el, $in_loop = false ) {

		if ( $post_el instanceof \WP_Post ) {

			$this->set_post( $post_el, $in_loop );

		}

	}


	protected function set_post( $post_el, $in_loop = false ) {

		$this->post_id  = $post_el->ID;
		$this->post_obj = $post_el;
		$this->title = ( $in_loop ) ? apply_filters( 'the_title', get_the_title() ) : $post_el->post_title;

		$people = get_post_meta( $post_el->ID, 'wsu_people', true );

		$people_array = explode( ',', $people );

		$this->people_ids = array_map( 'intval', $people_array );

	}


	public function get_format( $format ) {

		switch ( $format ) {

			case 'id':
				return $this->post_id;
			case 'array':
				return $this->get_array_format();
			case 'slug':
				return $this->slug;
			default:
				return $this;
		}

	}

	public function get_array_format() {

		$directory = array(
			'title'     => $this->title,
			'id'        => $this->post_id,
			'peopleIDs' => $this->people_ids,
		);

		return $directory;

	}

}
