import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  border: 4px solid rgba(13, 148, 136, 0.6);
  border-left-color: transparent;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
  
`;

const Loading = () => {
  return (
    <>
      <ModalBackground>
        <Spinner />
      </ModalBackground>
    </>
  );
};

export default Loading;