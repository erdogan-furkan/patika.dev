import React from "react";
import { Grid, Flex, Button } from "@chakra-ui/react";
import { useInfiniteQuery } from "react-query";
import Card from "../../components/Card";
import { fetchProductList } from "../../api";

function Products() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", fetchProductList, {
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
  });
  if (status === "loading") return "Loading...";

  if (status === "error") return "An error has occurred: " + error.message;

  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.data.map((item) => (
              <Card item={item} key={item._id} />
            ))}
          </React.Fragment>
        ))}
      </Grid>

      <Flex justifyContent="center">
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          isLoading={isFetching}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </Flex>
    </div>
  );
}

export default Products;
