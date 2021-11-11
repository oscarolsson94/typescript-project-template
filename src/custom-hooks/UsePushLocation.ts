import { useHistory } from "react-router-dom";

interface Navigation {
  destination: (location: string) => void;
}

export const usePushLocation = (): Navigation => {
  const history = useHistory();

  const destination = (location: string): void => {
    history.push(location);
  };

  return { destination };
};
