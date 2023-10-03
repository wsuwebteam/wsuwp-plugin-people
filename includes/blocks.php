<?php namespace WSUWP\Plugin\People;

class Blocks {

	public static function init() {

		require_once Plugin::get( 'dir' ) . '/classes/class-block.php';

		$block_dir = Plugin::get( 'dir' ) . '/blocks';

		require_once $block_dir . '/wsu-directory/block.php';

		add_filter( 'wsu_allowed_blocks_filter', array( __CLASS__, 'add_blocks' ) );

	}


	public static function add_blocks( $blocks ) {

		$add_blocks = array( 'wsuwp/wsu-directory' );

		$blocks = array_merge( $blocks, $add_blocks );

		return $blocks;

	}

}

Blocks::init();
