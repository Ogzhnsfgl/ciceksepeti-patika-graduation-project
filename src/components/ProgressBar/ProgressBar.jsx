import propTypes from 'prop-types';
import React from 'react';

const ProgressBar = ({ progressVal }) => {
  const proggressContainerStyles = {
    height: '4px',
    width: '75%',
    backgroundColor: '#EAEAEA',
    borderRadius: 50,
    margin: '.5rem',
  };

  const progressFillerStyles = {
    height: '100%',
    width: `${progressVal}%`,
    backgroundColor: '#4B9CE2',
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width .6s ease-in-out',
  };

  const progressTextSetyles = {
    fontSize: '1.2rem',
    color: '#525252',
  };

  const progressWrapperStyle = {
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  };

  return (
    <>
      <div style={progressWrapperStyle}>
        <span style={progressTextSetyles}>{`%${progressVal}`}</span>
        <div style={proggressContainerStyles}>
          <div style={progressFillerStyles} />
        </div>
        <span style={progressTextSetyles}>Yükleniyor</span>
      </div>
    </>
  );
};

ProgressBar.propTypes = {
  progressVal: propTypes.number.isRequired,
};

export default ProgressBar;
