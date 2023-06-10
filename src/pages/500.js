import { Container } from '@mui/material';

export default function Custom404() {
  return (
    <Container>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
            <h2>500 - Internal Server Error</h2>
          </div>
          <a href="/">Go To Homepage</a>
        </div>
      </div>
    </Container>
  );
}
