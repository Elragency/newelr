// Fullpageslider.tsx
import React, { type FC, useRef } from "react";
import { Swiper as SwiperCore } from "swiper";
import * as S from "./styled"; // Ensure you're importing the right styled components
import { SwiperSlider } from "@components/SwiperSlider";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import { Icon } from "@static/icons";
import { FadeIn } from "@utils/animations/FadeIn";
import { Button } from "@components/Button";

export type FullPageSliderProps = {
    content?: {
        background: string;
        subtitle?: string;
        title: string;
        paragraph?: string;
        button?: {
            text: string;
            link: string;
        };
    }[];
};

export const FullPageSlider: FC<FullPageSliderProps> = ({ content }) => {
    const swiperRef = useRef<SwiperCore | null>(null); // Swiper reference to access the swiper instance

    if (!content || content.length === 0) {
        return null;
    }

    // Generate all slides
    const slides = content.map((slide, index) => (
        <S.FullPageSliderSlide key={index} $bgImage={slide.background}>
            {slide.background && (
                <S.FullPageSliderSlideImg data-swiper-parallax="70%">
                    <img src={slide.background} alt={slide.title} />
                </S.FullPageSliderSlideImg>
            )}
            <FadeIn>
                <S.FullPageSliderSlideContent data-swiper-parallax="-40%">
                    {slide.subtitle && (
                        <S.FullPageSliderSlideContentSubtitle>
                            {slide.subtitle}
                        </S.FullPageSliderSlideContentSubtitle>
                    )}
                    {slide.title && <h1>{slide.title}</h1>}
                    {slide.paragraph && <p>{slide.paragraph}</p>}
                    {slide.button && slide.button.text && slide.button.link && (
                        <Button
                            variant="primary"
                            showIcon={true}
                            link={slide.button.link}
                        >
                            {slide.button.text}
                        </Button>
                    )}
                </S.FullPageSliderSlideContent>
            </FadeIn>
        </S.FullPageSliderSlide>
    ));

    // Function to go to the next slide
    const goToNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext(); // Move to the next slide
        }
    };

    return (
        <S.FullPageSliderStyled>
            <SwiperSlider
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Get swiper instance and store it in swiperRef
                modules={[Parallax, Pagination, Autoplay]}
                options={{
                    slidesPerView: 1,
                    parallax: true,
                    speed: 1000,
                    spaceBetween: 0,
                    effect: "slide",
                    loop: true, // Enable looping
                    loopAdditionalSlides: 1, // Preload additional slides for smooth looping
                    grabCursor: true,
                    pagination: {
                        el: ".swiper-pagination",
                        type: "progressbar",
                    },
                    autoplay: {
                        delay: 5000,
                    },
                }}
            >
                {slides}
            </SwiperSlider>
            {slides.length > 1 ? (
                <>
                    <S.FullPageSliderTextToSlide onClick={goToNextSlide}>
                        Glisser Pour Défiler
                        <Icon iconData="arrowRight" alt="arrow icon" />
                    </S.FullPageSliderTextToSlide>
                    <div className="swiper-pagination"></div>
                </>
            ) : (
                <S.FullPageSliderTextToSlide>
                    Descendre vers le bas
                    <Icon iconData="arrowDown" alt="arrow icon" />
                </S.FullPageSliderTextToSlide>
            )}
        </S.FullPageSliderStyled>
    );
};
