import React from "react";
import logoImg from "../../assets/Horizon_horiz_br.png";
import { Container, Content } from "./styles";

export function Header({ userInfos, backHeader }) {
  return (
    <>
      {Object.keys(userInfos).length > 0 && (
        <Container
          className={backHeader ? "background-black-scroll-header" : ""}
        >
          <Content>
            <img src={logoImg} alt="horizonfy logo" className="logo" />

            <div className="user-info">
              <img
                src={userInfos.images[0].url}
                alt="user avatar"
                className="user-avatar"
              />
              <span>{userInfos.display_name}</span>
            </div>
          </Content>
        </Container>
      )}
    </>
  );
}
