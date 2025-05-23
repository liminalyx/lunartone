import { styled } from "@kuma-ui/core"
import Localized from "../Localized"
import discordIcon from "./images/discord-icon.svg"
import githubIcon from "./images/github-icon.svg"
import logoWhite from "./images/logo-white.svg"
const Header = styled.header`
  background:rgb(29, 40, 33);
`

const Content = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 60rem;
  width: 90%;
  margin: 0 auto;
`

const LogoLink = styled.a`
  display: flex;

  img {
    height: 1.7rem;
  }

  &:hover {
    opacity: 0.7;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      opacity: 0.7;
    }
  }
`

const IconLink = styled.a`
  display: inline-flex;
  align-items: center;

  img {
    width: 1.5rem;
    height: 1.5rem;
    fill: white;
  }
`

export const Navigation = () => {
  return (
    <Header>
      <Content>
      <LogoLink href="/">
      <img src={logoWhite.src} style={{ width: "150px", height: "auto" }} />
        </LogoLink>

        <Menu>
          <a href="/support" style={{ marginRight: "1rem" }}>
            <Localized name="support" />
          </a>
          <IconLink href="https://discord.com/invite/XQxzNdDJse">
            <img src={discordIcon.src} />
          </IconLink>
          <IconLink href="https://github.com/ryohey/signal/" id="github-link">
            <img src={githubIcon.src} />
          </IconLink>
        </Menu>
      </Content>
    </Header>
  )
}
