import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { styled } from "styled-components";
import { useState } from "react";

//뷰포트 480-577px에서 마지막 카드 보여줄 때 작은 오류 있음
const Carousel = () => {
  //요소 네개 이상이어야 정상 작동
  const [dest, setDest] = useState(["a", "b", "c", "d", "e", "f", "g"]);

  return (
    <Wrapper>
      <div className="container">
        <StyledSlider {...settings}>
          {dest.map(() => {
            return (
              <Card>
                <img src="" alt="" />
              </Card>
            );
          })}
        </StyledSlider>
      </div>
    </Wrapper>
  );
};

export default Carousel;

const settings = {
  className: "center",
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  accessivility: true,
  variableWidth: true,
  draggable: false,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "50px", //디폴트값
  pauseOnHover: true, // hover시 정지
  //화면 넓이에 따른 반응형 옵션
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "50px",
      },
    },
  ],
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: auto;

  margin-top: 15px;
  margin-bottom: 50.5px;
`;

const Card = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 35px;
    filter: grayscale(50%);
  }
`;
const StyledSlider = styled(Slider)`
  height: 370px;

  .slick-prev {
    width: 2rem;
    height: 2rem;
    left: 4rem;
    z-index: 1;
  }
  .slick-next {
    width: 2rem;
    height: 2rem;
    right: 4rem;
  }
  .slick-prev:before {
    font-size: 2rem;
    color: rgba(58, 58, 58, 0.8);
    opacity: 1;
  }
  .slick-next:before {
    font-size: 2rem;
    color: rgba(58, 58, 58, 0.8);
    opacity: 1;
  }
  .slick-list {
    //화면에 보여지는 부분
    position: relative;
    display: block;
    margin: 0;
    width: 100vw;
    height: 370px;
    overflow: hidden;
  }
  .slick-track {
    top: 0;
    left: 0;
    height: 370px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slick-slide {
    //각 카드 스타일링
    display: flex;
    align-items: center;
    justify-content: center;
    //카드 사이 간격

    width: 270px; //얘가 통일 돼야 정렬됨
    height: 370px;
    //자식인 Card 컴포넌트
    div {
      width: 240px;
      height: 332px;
      border-radius: 35px;
      background: lightgray 50% / cover no-repeat;
    }

    :hover div {
      transform: scale(1.03);
    }
  }
  .slick-active {
    //포커스 카드 개수 1개 일때는 current가 덮어씀
    //포커스된 카드들 (pc는 3개, 모바일은 1개))
    width: 270px;

    height: 370px;

    div {
      width: 250px;
      height: 352px;
      border-radius: 35px;
      background: lightgray 50% / cover no-repeat;
    }
  }
  .slick-current {
    //가운데 카드 하나
    width: 270px;

    height: 370px;

    div {
      width: 260px;
      height: 370px;
      border-radius: 35px;
      background: lightgray 50% / cover no-repeat;
    }
  }
`;
