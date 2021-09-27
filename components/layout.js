import styled from '@emotion/styled';

export default function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  max-width: 800px;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;
