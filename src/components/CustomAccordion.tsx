import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ApartmentIcon from "@mui/icons-material/Apartment";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
interface IProps {
  summary: string;
  details: string[];
}

function CustomAccordion({ summary, details }: IProps) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="amentities-content"
        id="amentities-list"
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ApartmentIcon />
          <Typography fontWeight="bold">{summary}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <List
          sx={{
            width: "100%",
          }}
        >
          {[1, 2, 3].map((value) => (
            <ListItem key={value}>
              <RadioButtonUncheckedIcon
                sx={{
                  fontSize: "0.6rem",
                  mr: "0.5rem",
                }}
              />
              <Typography fontWeight="normal">item 1</Typography>
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}

export default CustomAccordion;
