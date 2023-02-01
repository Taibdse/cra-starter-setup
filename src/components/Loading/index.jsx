import React from 'react';
import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';
import PropTypes from 'prop-types'

export default function Loading(props) {
  const { visible, ...restProps } = props
  return (
    <Dialog visible={visible} {...restProps} closable={false} header={null}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 200 }}>
        <ProgressSpinner />
      </div>
    </Dialog>
  )
}

Loading.propTypes = {
  visible: PropTypes.bool,
  // ...Dialog.propTypes
}

Loading.defaultProps = {
  visible: false
}
