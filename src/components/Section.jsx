import PropTypes from 'prop-types';
export default function Section( props, children ) {
    return <div>{children}</div>
};

Section.propTypes = {
    children: PropTypes.node,
}

