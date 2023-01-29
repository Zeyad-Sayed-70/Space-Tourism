import styled from "styled-components";

export const CrewProvider = styled.main`
    text-align: center;

    article {
        display: flex;
        flex-direction: column;
        padding: 3rem 0 2rem 0;
        /* animation: FadeIn 1s forwards ease; */

        @media (min-width: 767px) {
            flex-direction: column-reverse;
            padding-bottom: 0;
        }
        @media (min-width: 1024px) {
            flex-direction: row-reverse;
            text-align: start;
            justify-content: center;
            align-items: center;
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }

    header {
        @media (min-width: 1024px) {
            margin-right: 51.5rem;
        }
    }

    

    .image-container {
        width: 250px;
        height: 350px;
        display: flex;
        align-items: end;
        margin: 0 auto;
        overflow: hidden;
        user-select: none;
        position: relative;
        @media (min-width: 767px) {
            width: 320px;
            height: calc(100vh - 378px);
            min-height: 450px;
            transform: translateY(0);
        }
        @media (min-width: 1024px) {
            margin: 0;
            width: 400px;
            height: calc(100vh - 162px);
        }
        img {
            width: 100%;
            transform: translateY(3rem);
            pointer-events: none;
            @media (min-width: 767px) {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
            }

        }
    }

    hr {
        margin-top: 0;
        @media (min-width: 767px) {
            display: none;
        }
    }

    .info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: 767px) {
            flex-direction: column-reverse;
        }
        @media (min-width: 1024px) {
            width: 600px;
            height: 420px;
            align-items: start;
        }
        nav {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .85rem;
            margin-bottom: 1.85rem;

            @media (min-width: 767px) {
                margin-top: 1rem;
            }
            @media (min-width: 1024px) {
                justify-content: flex-start;
                height: 80px;
                align-items: flex-end;
            }

            a {
                width: 10px;
                height: 10px;
                background-color: var(--text-color-idle-white);
                border-radius: 50%;
                cursor: pointer;
                
                @media (min-width: 1024px) {
                    width: 12px;
                    height: 12px;
                }

                &:hover {
                    background-color: var(--text-color-variant-white);
                }
                &.active {
                    background-color: var(--text-color-white);
                }
            }
        }

        div {
            text-transform: uppercase;
            span {
                color: var(--text-color-variant-white);
                font-weight: bold;
                font-size: var(--font-size-navText);
                @media (min-width: 767px) {
                    font-size: var(--font-size-subheading1);
                }
                @media (min-width: 1024px) {
                    font-size: var(--font-size-subheading1);
                }
            }
            h4 {
                font-size: var(--font-size-subheading1);
                margin-bottom: 0;
                @media (min-width: 1024px) {
                    font-size: var(--font-size-h3);
                }
            }
        }
    }
`;