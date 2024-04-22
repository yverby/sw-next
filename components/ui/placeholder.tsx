import { Center, Heading, Stack, Spinner, Text } from '@chakra-ui/react';

export function Placeholder({
  loading,
  title,
  subtitle,
  children,
}: React.PropsWithChildren<{
  loading?: boolean;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}>) {
  const innerTitle =
    typeof title === 'string' ? (
      <Heading as="h3" fontSize="3xl" fontWeight="800">
        {title}
      </Heading>
    ) : (
      title
    );

  const innerSubtitle =
    typeof subtitle === 'string' ? (
      <Text fontSize="lg" fontWeight="600">
        {subtitle}
      </Text>
    ) : (
      subtitle
    );

  const spinner = loading && <Spinner size="xl" thickness="3px" />;

  return (
    <Center flex="1">
      <Stack spacing={3} alignItems="center">
        <>{spinner}</>
        <>{innerTitle}</>
        <>{innerSubtitle}</>
        <>{children}</>
      </Stack>
    </Center>
  );
}
