type ErrorStateProps = {
  message: string;
};

function ErrorState({ message }: ErrorStateProps) {
  return <h1>{message}</h1>;
}

export default ErrorState;
