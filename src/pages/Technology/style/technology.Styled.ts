import styled from "styled-components";

export const TechnologyProvider = styled.main`
    text-align: center;
    padding: 1rem 0;

    @media (min-width: 1240px) {
        .header {
            margin-right: 63rem;
        }
        text-align: start;
    }
    @media (min-width: 1600px) {
        .header {
            margin-right: 67.5rem;
        }
    }

    article {
        @media (min-width: 1240px) {
            height: calc(100vh - 160px);
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: center;
        }
        @media (min-width: 1600px) {
            gap: 10rem;
        }
    }

    .image-container {
        padding: 2rem 0 1.5rem;
        user-select: none;
        img {
            width: 100%;
            aspect-ratio: 16/8;
            object-fit: cover;
            pointer-events: none;

            &.bg {
                display: none;
            }
        }
        @media (min-width: 767px) {
            padding: 3rem 0 1.5rem;
            img {
                aspect-ratio: 12/5;
            }
        }
        @media (min-width: 1240px) {
            display: flex;
            justify-content: right;
            margin-left: auto;
            img {
                width: 500px;
                aspect-ratio: 1/1;

                &.sm {
                    display: none;
                }
                &.bg {
                    display: block;
                }
            }
        }
        @media (min-width: 1600px) {
            margin-left: 0;
        }
    }

    .info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;

        @media (min-width: 1240px) {
            width: 50%;
            flex-direction: row;
            justify-content: flex-end;
            gap: 2rem;
        }
        @media (min-width: 1600px) {
            justify-content: center;
        }

        nav {
            display: flex;
            gap: 1rem;
            user-select: none;

            @media (min-width: 1240px) {
                flex-direction: column;
            }

            a {
                width: 40px;
                height: 40px;
                border: 1px solid var(--text-color-idle-white);
                border-radius: 50%;
                color: var(--text-color-white);
                text-decoration: none;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                font-weight: bold;
                transition: .3s ease;
                position: relative;

                &::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    background-color: rgba(255,255,255,.9);
                    width: 0%;
                    height: 0%;
                    border-radius: 50%;
                    z-index: -1;
                }

                &:is(:hover, .active) {
                    background-color: var(--text-color-white);
                    color: var(--background-color);
                }

                &:hover::before {
                    animation: Beats 1s infinite ease;
                }

                @media (min-width: 767px) {
                    width: 60px;
                    height: 60px;
                    font-size: 1.5rem;
                }
                @media (min-width: 1240px) {
                    width: 65px;
                    height: 65px;
                    font-size: 1.5rem;
                }
            }
        }
    }

    div {
        text-transform: uppercase;
        span {
            @media (min-width: 1240px) {
                font-size: 1rem;
            }
        }
        h4 {
            margin-bottom: 0;
            @media (min-width: 1240px) {
                font-size: var(--font-size-h3);
            }
        }
    }
    
    p {
        width: clamp(300px, 80%, 550px);
        margin: 1rem auto;
        @media (min-width: 1240px) {
            width: 500px;
        }
    }
`;