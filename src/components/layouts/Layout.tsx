import { Box } from "@mui/system";
import Head from "next/head";

interface IProps {
  title?: string;
  children?: React.ReactNode;
}

export const Layout = ({ title = "OpenJira", children }: IProps) => {
  return (
    <Box
      sx={{
        flexFlow: 1,
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>

      {/* navbar */}
      {/* sidebar */}

      <Box
        sx={{
          padding: "10px 20px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
