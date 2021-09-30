import { Card, StyledBody } from 'baseui/card';
import { Display2 } from 'baseui/typography';
import { H3 } from 'baseui/typography';
import { useStyletron } from 'baseui';

const Main = (): JSX.Element => {
  return (
    <Inner>
      <Card>
        <StyledBody>
          <Display2 marginBottom="scale1000" marginTop="scale1000">
            Frontend template
          </Display2>
          <H3 marginBottom="scale1000">by Wealize</H3>
        </StyledBody>
      </Card>
    </Inner>
  );
};

const Inner: React.FunctionComponent<{}> = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        textAlign: "center",
        padding: theme.sizing.scale800,
      })}
    >
      {children}
    </div>
  );
};

export default Main;
