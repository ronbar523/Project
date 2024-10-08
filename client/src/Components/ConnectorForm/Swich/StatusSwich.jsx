import { Box, FormControlLabel, Switch } from "@mui/material";

const StatusSwich = ({ status, setStatus }) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      ml="-10px"
      mt="-5px"
    >
      <FormControlLabel
        control={
          <Switch
            required
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Satus"
        labelPlacement="start"
      />
    </Box>
  );
};

export default StatusSwich;
