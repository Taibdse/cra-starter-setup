import { Helmet } from 'react-helmet';
import Loading from '../Loading';
import EmptyContent from '../EmptyContent';
import styles from './styles.module.css';
import classNames from 'classnames';
import { APP_NAME } from 'common/constants/app';
import PropTypes from 'prop-types';

const PageContainer = (props) => {
  const {
    title,
    titleComponent,
    actionButton,
    isLoading = false,
    isNotFound = false,
    notfoundTitle = '',
    children,
    classes = {},
    isEmptyPage = false,
    ...restProps
  } = props;

  // Merge styles
  const containerClasses = classNames([styles.container, classes?.container]);
  const headerClasses = classNames([styles.header, classes?.header]);
  const contentClasses = classNames([styles.content, classes?.content]);

  // Components
  const Title = titleComponent || <h3 className="text-3xlg">{title}</h3>;

  return (
    <>
      <Helmet>
        <title>{title} - {APP_NAME}</title>
      </Helmet>
      <div className={containerClasses} {...restProps}>
        {!isEmptyPage && (
          <>
            <div className={headerClasses}>
              {Title}
              <div>{!isNotFound && actionButton}</div>
            </div>
            <div className={contentClasses}>
              {isNotFound && <EmptyContent label={notfoundTitle} />}
              {!isNotFound && children}
            </div>
          </>
        )}
        {(isEmptyPage && !isNotFound) && children}
        {(isEmptyPage && isNotFound) && <EmptyContent label={notfoundTitle} />}
        <Loading visible={isLoading} />
      </div>
    </>
  );
};

PageContainer.propTypes = {
  title: PropTypes.string,
  titleComponent: PropTypes.element,
  notfoundTitle: PropTypes.string,
  isLoading: PropTypes.bool,
  isNotFound: PropTypes.bool,
  children: PropTypes.element,
  actionButton: PropTypes.any,
  classes: PropTypes.shape({
    container: PropTypes.string,
    header: PropTypes.string,
    content: PropTypes.string
  }),
  id: PropTypes.string,
  style: PropTypes.any,
  isEmptyPage: PropTypes.bool
}

PageContainer.defaultProps = {
  title: '',
  titleComponent: null,
  notfoundTitle: 'Notfound',
  isLoading: false,
  isNotFound: false,
  children: null,
  actionButton: null,
  classes: {},
  id: null,
  style: {},
  isEmptyPage: false
}

export default PageContainer;
