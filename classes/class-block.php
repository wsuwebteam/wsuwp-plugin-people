<?php namespace WSUWP\Plugin\People;

class Block {

    protected static $block_name = false;


    public static function init() {

        static::register_block();

    }


    public static function render_block( $props, $content = '' ) {

		return 'Directory';


    }

    protected static function register_block() {

		register_block_type(
			static::$block_name,
			array(
				'render_callback' => array( __CLASS__, 'render_block' ),
				'api_version'     => 2,
				'editor_script'   => array( 'wsuwp-plugin-people-editor-scripts', 'wsuwp-plugin-people-editor-data' ),
				'editor_style'    => 'wsuwp-plugin-people-editor-styles',
			)
		);

	}

}
