import { useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Heading, Button, Flex } from "@chakra-ui/react";
import { message } from "antd";
import { Table, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { fetchAllProducts, deleteProduct } from "../../../api";

function Products() {
  const { isLoading, isError, data, error } = useQuery(
    "admin:products",
    fetchAllProducts
  );

  const queryClient = useQueryClient();

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => {
      message.success({
        content: "Product successfully deleted.",
        duration: 2,
      });

      queryClient.refetchQueries("products");
      queryClient.refetchQueries("admin:products");
    },
  });

  const columns = useMemo(() => {
    return [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (text, record) => (
          <>
            <Link to={`${record._id}`} style={{ marginRight: 10 }}>
              Edit
            </Link>

            <Popconfirm
              title="Are you sure?"
              placement="left"
              onConfirm={() => deleteMutation.mutate(record._id)}
            >
              <Link to="#">Delete</Link>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, [deleteMutation]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h3">Products</Heading>

        <Link to="new">
          <Button>Add a new product</Button>
        </Link>
      </Flex>

      <Table dataSource={data.data} columns={columns} rowKey="_id" />
    </div>
  );
}

export default Products;
