<?php namespace WSUWP\Plugin\People;


class Post_Type_Directory {

	private static $post_type = 'wsu_directory';


	public static function get( $property ) {

		switch ( $property ) {

			case 'post_type';
				return self::$post_type;

		}

	}


	public static function init() {

		add_action( 'init', array( __CLASS__, 'register_post_type_directory' ) );

		add_action( 'init', array( __CLASS__, 'register_meta_field' ) );

	}


	public static function register_post_type_directory() {

		$post_type_args = array(
			'labels'        => array(
				'name'          => '(Beta) Directory',
				'singular_name' => '(Beta) Directories',
			),
			'description'   => '',
			'public'        => false,
			'show_ui'       => true,
			'has_archive'   => true,
			'show_in_rest'  => true,
			'menu_position' => 4,
			'menu_icon'     => 'dashicons-media-text',
			'show_in_menu'  => 'tools.php', // set this
			'hierarchical'  => true,
			'supports'      => array(
				'title',
				'editor',
				'thumbnail',
				'excerpt',
				'custom-fields',
			),
			'rewrite'       => array(
				'slug'       => 'wsu-directory',
				'with_front' => false,
			),
			'template' => array(
				array(
					'wsuwp/wsu-directory',
					array(),
					array(),
				),
			),
			'template_lock' => 'all',
		);

		register_post_type( self::$post_type, $post_type_args );

	}


	public static function register_meta_field() {
		register_post_meta(
			self::$post_type,
			'wsu_people',
			array(
				'type'         => 'string',
				'show_in_rest' => true,
				'single'       => true,
			)
		);

		register_post_meta(
			self::$post_type,
			'wsu_child_directories',
			array(
				'type'         => 'string',
				'show_in_rest' => true,
				'single'       => true,
			)
		);

	}

}

Post_Type_Directory::init();
