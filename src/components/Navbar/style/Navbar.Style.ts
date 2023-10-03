import styled from "styled-components";

export const NavContainer = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
`;

export const NavbarProvider = styled.main<{ isOpen: boolean }>`
  height: 90px;
  @media (min-width: 768px) {
    padding-top: 1.5rem;
  }
  .container {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
      padding-right: 0;
    }
  }

  .logo {
    img {
      width: 30px;
      height: 30px;
      pointer-events: none;
    }
  }

  .menu-toggle {
    cursor: pointer;
    transition: 0.3s;
    ${({ isOpen }) => (isOpen ? "opacity: 0;" : "opacity: 1;")}

    @media (min-width: 767px) {
      display: none;
    }

    svg {
      width: 40px;
      height: 40px;
    }
  }

  nav {
    font-family: var(--font-family-berlow);
    text-transform: uppercase;
    height: 100%;
    background-color: rgba(208, 214, 249, 0.09);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    -moz-backdrop-filter: blur(5px);
    -o-backdrop-filter: blur(5px);
    -ms-backdrop-filter: blur(5px);
    padding-right: 5rem;
    padding-left: 2rem;
    display: none;

    @media (min-width: 768px) {
      display: block;
    }

    &::before {
      content: "";
      position: absolute;
      right: 96%;
      top: 50%;
      transform: translateY(-50%);
      width: calc(100vw - 550px);
      height: 1px;
      background-color: var(--text-color-idle-white);
    }

    ul {
      height: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;

      a {
        color: var(--text-color-white);
        text-decoration: none;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 3px;
          background-color: var(--text-color-white);
          transition: 0.1s ease-in;
          z-index: 2;
        }

        &:hover::before,
        &.active::before {
          width: 100%;
        }
      }

      li {
        cursor: pointer;
        span {
          font-weight: bold;
        }
      }
    }
  }
`;
