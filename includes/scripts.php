<?php namespace WSUWP\Plugin\People;

class Scripts {


	public static function init() {

		add_action( 'init', array( __CLASS__, 'register_block_editor_assets' ) );

		add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'localize_editor_data' ) );

	}


	public static function register_block_editor_assets() {

		$editor_asset = include Plugin::get( 'dir' ) . '/assets/dist/editor.asset.php';

		// register editor assets
		wp_register_script(
			'wsuwp-plugin-people-editor-scripts',
			Plugin::get( 'url' ) . 'assets/dist/editor.js',
			$editor_asset['dependencies'],
			$editor_asset['version'],
			true,
		);

		wp_register_style(
			'wsuwp-plugin-people-editor-styles',
			Plugin::get( 'url' ) . 'assets/dist/editor.css',
			array(),
			$editor_asset['version']
		);

	}


	public static function localize_editor_data() {

		wp_register_script( 'wsuwp-plugin-people-editor-data', Plugin::get( 'url' ), array(), $editor_asset['version'], true );

		wp_localize_script(
			'wsuwp-plugin-people-editor-data',
			'wsuPeopleData',
			array( 'adminUrl' => admin_url() )
		);

	}

}

Scripts::init();
