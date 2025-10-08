import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
} from "@mui/material";
import { useCompaniesContext } from "../../hooks/useCompaniesContext";

const PaginationEle = () => {
  const {
    currentPage,
    totalPages,
    filteredCompanies,
    itemsPerPage,
    setCurrentPageHandler,
    setItemsPerPageHandler,
  } = useCompaniesContext();

  if (filteredCompanies.length === 0) return null;

  const handlePageChange = (event, page) => {
    setCurrentPageHandler(page);
  };

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = e.target.value;
    setItemsPerPageHandler(newItemsPerPage);
  };

  return (
    <Box className="my-6 max-w-screen-lg mx-auto px-4 shadow-2xl">
      <Stack
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        className="px-4 py-3"
      >
        <div classname="w-full sm:w-auto flex justify-center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            shape="rounded"
            showFirstButton
            showLastButton
            siblingCount={1}
            boundaryCount={1}
            aria-label="Companies Pagination"
            sx={{
              "& .Mui-selected": {
                backgroundColor: "#2d5986",
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#1a365d",
                },
              },
              "& .MuiPaginationItem-page:hover": {
                backgroundColor: "rgba(45, 89, 134, 0.1)",
              },
            }}
          />
        </div>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel id="items-per-page-label" className="text-gray-700">
            Items per page
          </InputLabel>
          <Select
            labelId="items-per-page-label"
            id="items-per-page-select"
            value={itemsPerPage}
            label="Items per Page"
            onChange={handleItemsPerPageChange}
            aria-label="Select items per page"
            displayEmpty
          >
            {[6, 12, 24, 50].map((count) => (
              <MenuItem key={count} value={count}>
                {count}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default PaginationEle;
