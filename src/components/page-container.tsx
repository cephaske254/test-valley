import Container from "@mui/material/Container";

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <Container maxWidth="md">{children}</Container>;
};

type PageContainerProps = React.PropsWithChildren<{}>;

export default PageContainer;
