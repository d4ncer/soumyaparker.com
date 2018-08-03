import Img from 'gatsby-image';
import styled from 'styled-components';

const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${({ height }) => height || 'auto'};

  & > img {
    object-fit: ${({ fit }) => fit || 'cover'} !important;
    object-position: ${({ position }) => position || '50% 50%'} !important;
    font-family: 'object-fit: ${({ fit }) =>
      fit || 'cover'} !important; object-position: ${({ position }) =>
  position || '50% 50%'} !important;'
  }
`;

export const BgImageRaw = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${({ height }) => height || 'auto'};

  & > img {
    object-fit: ${({ fit }) => fit || 'cover'} !important;
    object-position: ${({ position }) => position || '50% 50%'} !important;
    font-family: 'object-fit: ${({ fit }) =>
      fit || 'cover'} !important; object-position: ${({ position }) =>
  position || '50% 50%'} !important;'
  }
`;

export default BgImage;
