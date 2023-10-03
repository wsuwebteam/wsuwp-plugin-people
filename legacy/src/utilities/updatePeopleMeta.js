import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';

const updatePeopleMeta = ( peopleString ) => {

    wp.data.dispatch('core/editor').editPost({ meta: { wsu_people: peopleString } });

}

export default updatePeopleMeta; 