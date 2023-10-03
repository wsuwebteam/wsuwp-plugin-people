<?php namespace WSUWP\Plugin\People;

class Person {

	protected $post_obj     = false;
	protected $post_id      = false;
	protected $directory_id = false;
	protected $display_name = '';


	public function get( $property, $default = '' ) {

		switch ( $property ) {

			case 'id':
				return $this->post_id;
			default:
				return $defalut;

		}

	}

	public function __construct( $post_el, $directory_id = false, $in_loop = false ) {

		$this->directory_id = $directory_id;

		if ( $post_el instanceof \WP_Post ) {

			$this->set_post( $post_el, $in_loop );

		}

	}


	protected function set_post( $post_el, $in_loop = false ) {

		$this->post_id  = $post_el->ID;
		$this->post_obj = $post_el;

		if ( $in_loop ) {

			$this->display_name = apply_filters( 'the_title', get_the_title() );

		}

	}


	public function get_person_array( $fields = array() ) {

		$person = array(
			'displayName' => $this->display_name,
			'id'           => $this->post_id,
			'directoryID'  => $this->directory_id,
		);

		if ( ! empty( $fields ) ) {

			foreach ( $person as $key => $value ) {

				if ( ! in_array( $key, $fields, true ) ) {

					unset( $person[ $key ] );

				}
			}
		}

		return $person;

	}

}
