import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setThemes } from "../../Redux/Itinerary/action";

const Button = ({ selected_list }) => {
  const dispatch = useDispatch();

  // themes 값을 변경하는 액션 디스패치
  const handleSetThemes = (list) => {
    dispatch(setThemes(list));
  };

  const navigate = useNavigate();

  const handleNavigatePrev = () => {
    handleSetThemes([]);
    navigate(-1);
  };

  const handleNavigateNext = () => {
    handleSetThemes(selected_list);
    navigate(`/period`);
  };

  return (
    <BtnContainer>
      <PrevBtn onClick={handleNavigatePrev}>Prev</PrevBtn>
      <NextBtn onClick={handleNavigateNext}>Next</NextBtn>
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

const PrevBtn = styled.button`
  width: 10rem;
  height: 4rem;
  border-radius: 32px;
  background: #a3a3a3;
  color: white;
  border: none;
  font-size: 1.2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const NextBtn = styled(PrevBtn)`
  background: #353535;
`;

export default Button;
