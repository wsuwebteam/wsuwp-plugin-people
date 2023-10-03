<?php namespace WSUWP\Plugin\People;

class API {

	
	public static function respond( $response, $is_success = true, $message = 'Success', $args = array() ) {

		$payload = array(
			'success' => $is_success,
			'response' => $response,
			'message' => $message,
		);

		if ( ! empty( $args ) ) {

			$payload = array_merge( $payload, $args );
		}

		return $payload;

	}

}
