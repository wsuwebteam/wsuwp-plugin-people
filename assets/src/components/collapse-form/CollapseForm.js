import './_style.scss';

const CollapseForm = ( props ) => {

    let {
        isActive = false,
    } = props;

    return (
        <div className="wsu-gbe-people__collapse-form" aria-expanded={ isActive ? 'true' : 'false'  }>
            <div className="wsu-gbe-people__collapse-form__inner-wrapper">
                {props.children}
            </div>
        </div>
    );

}

export default CollapseForm;