import classNames from "classnames";
import styles from './styles.module.css';
import PropTypes from 'prop-types'

const EmptyContent = (props) => {
  const { label = '', classes = {}, children } = props;
  const rootClasses = classNames([styles.container, classes?.root]);
  return (<div className={rootClasses}>{label || children}</div>);
}

EmptyContent.propTypes = {
  label: PropTypes.string,
  children: PropTypes.element,
  classes: PropTypes.shape({
    root: PropTypes.string
  })
}

export default EmptyContent;
