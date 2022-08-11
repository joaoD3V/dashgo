import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>João Pedro</Text>
          <Text color="gray.300" fontSize="small">
            joao.devweb@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="João Pedro"
        src="https://github.com/joaod3v.png"
      />
    </Flex>
  );
}
