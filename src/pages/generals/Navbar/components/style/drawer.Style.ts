import styled from "styled-components";

export const DrawerProvider = styled.div<{ isOpen: boolean }> `
    ${({isOpen}) => isOpen 
    ? 
    `
    opacity: 1;
    transform: translateX(0);
    z-index: 2;
    `: 
    `
    opacity: 0;
    transform: translateX(100%);
    z-index: -1;
    `}
    
    transition: .3s ease;
    position: fixed;
    right: 0;
    top: 0;
    width: calc(100% - 120px);
    height: 100vh;
    max-width: 300px;
    background-color: rgba(255,255,255,.2);
    backdrop-filter: blur(5px);

    @media (min-width: 767px) {
        display: none;
    }

    .close {
        margin: .5rem .5rem 1rem auto;
        color: var(--text-color-lightBlue);
        font-size: var(--font-size-p);
        text-align: right;
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        transition: .3s ease-in;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0;
            height: 0;
            background-color: rgba(255,255,255,.3);
            border-radius: 50%;
        }
        &:hover {
            background-color: var(--text-color-idle-white);
            color: var(--background-color);
            
            &::before {
                animation: Beats 1s infinite;
            }
        }
    }

    ul {
        margin: 0;
        list-style: none;
        text-transform: uppercase;
        font-family: var(--font-family-berlow);
        letter-spacing: var(--character-space-x2);

        a {
            color: var(--text-color-white);
            text-decoration: none;
        }

        li {
            margin-bottom: 1.5rem;
            font-size: var(--font-size-navText);
            cursor: pointer;
            user-select: none;
            position: relative;

            span {
                font-weight: bold;
            }

            &::after {
                content: "";
                position: absolute;
                right: 0;
                top: 60%;
                transform: translateY(-50%);
                width: 3px;
                height: 0;
                background-color: var(--text-color-white);
                transition: .1s ease-in;
            
            }

            &:hover::after {
                height: 120%;
            }
        }
    }
`;