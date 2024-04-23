import { Box, Flex, IconButton, Input, Stack, Text, Image, useToast, List, ListItem } from "@chakra-ui/react";
import { FaHeart, FaComment, FaMicrophone, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const toast = useToast();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleLike = () => {
    toast({
      title: "Liked!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleComment = (comment) => {
    if (comment) {
      setComments((prevComments) => [...prevComments, comment]);
      toast({
        title: "Comment added!",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleVoiceComment = () => {
    toast({
      title: "Voice comment recorded!",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box maxW="md" mx="auto" p={5} borderWidth="1px" borderRadius="lg">
      <Image src="https://images.unsplash.com/photo-1589807867840-aca1258de008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjB2aWV3fGVufDB8fHx8MTcxMzgzMjY4MHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
      <Flex align="center" justify="space-between" my={2}>
        <IconButton icon={<FaHeart />} onClick={handleLike} aria-label="Like post" />
        <IconButton icon={<FaComment />} onClick={handleComment} aria-label="Add comment" />
        <IconButton icon={<FaMicrophone />} onClick={handleVoiceComment} aria-label="Add voice comment" />
      </Flex>
      <Stack direction="row" mt={2}>
        <Input placeholder="Add a comment..." value={comment} onChange={(e) => setComment(e.target.value)} />
        <IconButton icon={<FaPaperPlane />} onClick={() => handleComment(comment)} aria-label="Send comment" />
      </Stack>
      <List spacing={3}>
        {comments.map((comment, index) => (
          <ListItem key={index}>{comment}</ListItem>
        ))}
      </List>
      <Text fontSize="sm" color="gray.500" mt={2}>
        Posted on July 20, 2023
      </Text>
    </Box>
  );
};

export default Index;
