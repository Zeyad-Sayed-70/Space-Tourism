import styled from "styled-components";

export const HomePorvider = styled.div`
    height: calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 2.5rem;
    overflow: hidden;

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }

    .hero {
        animation: FadeIn 1s forwards ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .85rem;

        span {
            font-family: var(--font-family-berlow);
            font-size: var(--font-size-h5);
            text-transform: uppercase;
            color: var(--text-color-lightBlue)
        }
        h1 {
            margin: 0;
            font-size: var(--font-size-h1);
            text-transform: uppercase;
        }
        p {
            margin: 0;
            font-family: var(--font-family-berlow);
            width: 450px;
            font-size: var(--font-size-p);
            color: var(--text-color-lightBlue);
        }

        @media (min-width: 1024px) {
            text-align: left;
            align-items: start;
        }
    }

    .explore {
        animation: FadeIn 1s forwards ease;
        button {
            width: 150px;
            height: 150px;
            background-color: var(--text-color-white);
            color: var(--background-color);
            border: 0;
            border-radius: 50%;
            font-size: var(--font-size-h6);
            text-transform: uppercase;
            cursor: pointer;
            position: relative;
            transition: .3s ease;

            @media (min-width: 1024px) {
                width: 200px;
                height: 200px;
            }

            &::before {
                content: '';
                width: 0%;
                height: 0%;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background-color: rgba(255,255,255,.5);
                border-radius: 50%;
                z-index: -1;
            }

            &:hover {
                transform: scale(1.05);
                &::before {
                    animation: Beats 1.25s infinite;
                }
            }
        }
    }
`;