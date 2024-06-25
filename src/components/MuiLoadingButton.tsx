import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab/";
import SaveIcon from "@mui/icons-material/Save";
import {useState } from "react";
export const MuiLoadingButton = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess]= useState(false)
    const handleClick = () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false);
        setSuccess(true)
     
      }, 3000); 
    };
  return (
    <Stack spacing={2} direction={"row"}>
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>

      <LoadingButton loadingIndicator="Loading..." variant="outlined">
        Fetch Data
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
        Fetch Data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        variant="contained"
        loading={loading}
        color={success ? "success" : "primary"}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        onClick={handleClick}
      >
        Save
      </LoadingButton>
    </Stack>
  );
};
