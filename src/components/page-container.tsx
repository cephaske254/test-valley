import Container, { ContainerProps } from "@mui/material/Container";

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Container maxWidth="md" {...props}>
      {children}
    </Container>
  );
};

type PageContainerProps = React.PropsWithChildren<ContainerProps>;

export default PageContainer;
