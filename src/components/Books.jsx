import { Card, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`} style={{ textDecoration: 'none' }}>
      <Card key={id} my={4} p={4} cursor='pointer' width="300px">
        <VStack align="start">
          <Image w={24} h={24} src={`http://localhost:3000/${image}`} alt={title} />
          <Heading size={"md"}>{title}</Heading>
          <Text>{author}</Text>
          <Text>
            <span>Publisher: </span>
            {publisher}
          </Text>
          <Text>
            <span>Year: </span>
            {year}
          </Text>
        </VStack>
      </Card>
    </Link>
  );
}
