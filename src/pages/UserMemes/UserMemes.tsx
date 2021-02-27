import * as React from "react";
import styled from "styled-components";
import Container from "../../components/Container/Container";
import { fetchAllMemes } from "../../api";
import Spinner from "../../components/Spinner/Spinner";
import Snackbar from "../../components/Snackbar/Snackbar";
import Pagination from "../../components/Pagination/Pagination";

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

const Message = styled.h2`
  text-align: center;
  font-size: 2.5rem;
`;

const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding: 0 15px 20px;
`;

const Img = styled.img`
  display: block;
  margin: auto;
  object-fit: contain;
  max-width: 100%;
`;

export interface Meme {
  url: string;
  id: string;
}

const UserMemes = () => {
  const [memes, setMemes] = React.useState<Meme[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  React.useEffect(() => {
    const fetchMemes = async () => {
      setLoading(true);
      const fetched = await fetchAllMemes();
      setMemes(fetched);
      setLoading(false);
    };

    fetchMemes();
  }, []);

  return (
    <>
      <Container>
        <Title>Browse user created memes</Title>
        <MemeContainer>
          {loading && <Spinner size={200} />}
          {memes.length === 0 && !loading && (
            <Message>No memes available :(</Message>
          )}
          {memes.map((meme) => (
            <Img src={meme.url} alt={meme.id} key={meme.id} />
          ))}
        </MemeContainer>
        <Pagination current={0} maxPage={5} onSelect={() => {}} />
      </Container>
      <Snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        error
      >
        Something went wrong. Try again later
      </Snackbar>
    </>
  );
};

export default UserMemes;
