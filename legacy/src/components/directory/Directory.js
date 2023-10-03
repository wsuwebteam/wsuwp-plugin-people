import './_style.scss';
import { TextControl, Button } from '@wordpress/components';


const Directory = ( props ) => {

    let {
        title,
        post_id,
        adminUrl,
        isAdd = false,
        onClick,
    } = props;

    return (
        <>
        { isAdd && <Button className="wsu-gb-people-directory wsu-gb-people-directory__add" onClick={ onClick }>Add Child Directory</Button> }
        { ! isAdd && <div className="wsu-gb-people-directory">
            <h3>{title}</h3>
            <a href={`${adminUrl}post.php?post=${post_id}&action=edit`}  target="_blank" >Edit Directory</a>
        </div>}
        </>
    );
}

export default Directory;