import { Switch, Track, Thumb, Wrapper } from './styles.js';

const Toggle = ({ label }) => {
  return (
    <Wrapper>
      <Switch>
        <input type="checkbox" name="switch" />
        <Track>
          <Thumb />
        </Track>
      </Switch>
      <label>{label}</label>
    </Wrapper>
  );
};

export default Toggle;
