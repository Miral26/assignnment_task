import { Box } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

// Loader component
const Loader = () => {
  return (
    <Box m={"50px 0"} justifyContent='center' display='flex'>
      <RotatingLines
        strokeColor='grey'
        strokeWidth='5'
        animationDuration='0.75'
        width='96'
        visible={true}
      />
    </Box>
  );
};

export default Loader;
