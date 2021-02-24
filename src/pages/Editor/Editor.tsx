import * as React from "react";
import styled from "styled-components";
import { Template } from "../TemplatePicker/TemplatePicker";
import { useHistory } from "react-router-dom";

import InputField from "../../components/InputField/InputField";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import ResultModal from "./ResultModal";
import { addCaption } from "../../api";

const PaddingContainer = styled(Container)`
  padding-bottom: 2em;
`;

const Title = styled.h1`
  text-align: center;
  font-family: "Titillium Web", sans-serif;
  font-size: 4rem;
  margin: 20px;

  @media (max-width: 960px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Img = styled.img`
  object-fit: contain;
  max-height: 50vh;
  min-height: 10em;
  width: 100%;
  margin: auto;
  display: block;
  border: 1px solid gray;
  padding: 10px 15px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const StyledInput = styled(InputField)`
  display: inline-block;
  margin: auto;
`;

interface Props {
  activeTemplate: Template | null;
}

const Editor = ({ activeTemplate }: Props) => {
  const [inputValues, setInputValues] = React.useState<string[]>([]);
  const [receivedUrl, setReceivedUrl] = React.useState<string | null>(null);
  const history = useHistory();

  React.useEffect(() => {
    if (activeTemplate) {
      const values = [];
      for (let i = 0; i < activeTemplate.boxCount!; i++) {
        values.push("");
      }
      setInputValues(values);
    } else {
      history.replace("/");
    }
  }, [activeTemplate, history]);

  const handleSubmit = async () => {
    const url = await addCaption(activeTemplate!.id!, inputValues);
    setReceivedUrl(url);
  };

  const inputs = [];
  if (activeTemplate) {
    for (let i = 0; i < activeTemplate.boxCount!; i++) {
      inputs.push({
        value: inputValues[i],
        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[i] = e.target.value;
            return newValues;
          }),
        label: `caption ${i + 1}: `,
        key: i,
      });
    }
  }
  return (
    <>
      <PaddingContainer>
        <Title>Create your meme</Title>
        <Img src={activeTemplate?.url} alt="meme" />
        <InputContainer>
          {inputs.map(({ value, onChange, label, key }) => (
            <StyledInput
              value={value}
              onChange={onChange}
              label={label}
              key={key}
            />
          ))}
          <Button
            disabled={inputValues.filter((v) => v.length !== 0).length === 0}
            onClick={handleSubmit}
          >
            Create
          </Button>
        </InputContainer>
      </PaddingContainer>
      <ResultModal
        open={receivedUrl !== null}
        imageUrl={receivedUrl!}
        onClose={() => {}}
      />
    </>
  );
};

export default Editor;
