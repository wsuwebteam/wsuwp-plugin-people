import './_style.scss';

const HelperText = ( props ) => {

    return (
        <div className="wsu-cpm-helper-text wsu-gbe-people-font-size--xsmall wsu-gbe-people-font-color--gray-light">{props.children}</div>
    );

}

export default HelperText;