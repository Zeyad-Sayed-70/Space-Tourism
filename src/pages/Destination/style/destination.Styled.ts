import styled from "styled-components";

export const DestinationProvider = styled.main`
    text-align: center;
    @media (min-width: 1024px) {
        padding-top: 2rem;
    }
    header {
        text-transform: uppercase;
        font-family: var(--font-family-berlow);
        font-size: var(--font-size-p);
        letter-spacing: var(--character-space-x2);
        
        @media (min-width: 767px) {
            text-align: start;
            padding: 0 1rem;
        }
        
        @media (min-width: 1024px) {
            text-align: center;
            margin-right: 45rem;
        }
        span {
            color: var(--text-color-idle-white);
            font-weight: bold;
            margin-right: .5rem;
        }
    }

    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: FadeIn 1s forwards ease;
        
        @media (min-width: 1024px) {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding-top: 4rem;
            gap: 8rem;
        }

        .image-container {
            width: 170px;
            height: 170px;
            margin: 1rem 0;
            user-select: none;
            @media (min-width: 767px) {
                width: 270px;
                height: 270px;
            }
            @media (min-width: 1024px) {
                width: 370px;
                height: 370px;
            }
            img {
                width: 100%;
                object-fit: cover;
                pointer-events: none;
                animation: Spin 30s infinite linear;
            }
        }

        ul {
            list-style: none;
            height: 50px;
            padding: 0;
            margin: 0;
            margin-bottom: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1.25rem;
            letter-spacing: var(--character-space-x1);
            text-transform: uppercase;
            font-family: var(--font-family-berlow);
            font-size: var(--font-size-p);
            a {
                display: flex;
                align-items: center;
                height: 100%;
                text-decoration: none;
                color: var(--text-color-lightBlue);
                cursor: pointer;
                position: relative;

                &::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0%;
                    height: 3px;
                    background-color: var(--text-color-idle-white);
                    transition: .1s ease-in;
                    z-index: 2;
                }
                
                &:hover {
                    color: var(--text-color-white);
                    &::before {
                        width: 100%;
                    }
                }

                &.active {
                    color: var(--text-color-white);
                    &::before {
                        width: 100%;
                        background-color: var(--text-color-white);
                    }
                }
            }
        }

        .info {
            h2 {
                margin: 0;
                font-size: var(--font-size-h3);
                text-transform: uppercase;
                font-weight: 100;
            }

            p {
                font-family: var(--font-family-berlow);
                font-size: var(--font-size-p);
                color: var(--text-color-lightBlue);
                width: 340px;
                margin-bottom: 0;
                line-height: 1.5;

                @media (min-width: 767px) {
                    width: 480px;
                }
            }
        
            hr {
                border-color: var(--text-color-idle-white);
                margin: 2rem 0 ;
            }

            .statics {
                text-transform: uppercase;
                display: flex;
                flex-direction: column;
                gap: 1rem;

                @media (min-width: 767px) {
                    flex-direction: row;
                    gap: 3rem;
                    justify-content: center;
                }
                span {
                    font-family: var(--font-family-berlow);
                    font-size: var(--font-size-subheading2);
                    color: var(--text-color-lightBlue);
                    letter-spacing: var(--character-space-x1);
                }
                h4 {
                    font-size: var(--font-size-h4);
                    margin: .5rem 0;
                    font-weight: 100;
                }
            }
        }
    }
`;