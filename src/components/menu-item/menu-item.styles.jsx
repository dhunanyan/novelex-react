import styled from "styled-components";

export const MenuItemContainer = styled.div`
  width: 100%;
  height: 290px;
  background-color: #292929;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    height: 300px;

    div:first-of-type > div {
      transform: scale(1.1);
    }

    .text {
      transition: all 0.3s ease;
      opacity: 1;
      max-height: 40px;
    }

    .icon {
      background-position: -120px;
      transition: all 0.3s ease;
    }

    i {
      background: linear-gradient(90deg, #ff7e7e, #ff4848);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 1;
      transition: all 0.3s ease;
    }
  }
`;

export const MenuItemImgContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const MenuItemImg = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transition: all 350ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
  background-image: url(${({ imageUrl }) => imageUrl});
`;

export const MenuItemContent = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 80px;
  max-width: 80px;
  background: ${({ color }) =>
    `linear-gradient(90deg, #424242 0%, #303030 40%, ${color} 60%)`};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.8s ease;
  background-position: 0px;
  background-size: 200px;
  position: absolute;
`;

export const MenuItemTitle = styled.h4`
  width: 100%;
  margin: 20px auto 5px auto;
  text-align: center;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0px;
`;

export const MenuItemDescr = styled.p`
  width: 80%;
  margin: 5px auto 20px auto;
  font-size: 13px;
  text-align: center;
  color: white;
  font-weight: 200;
  letter-spacing: 0px;
  opacity: 0;
  max-height: 0;
  transition: all 0.3s ease;
`;
