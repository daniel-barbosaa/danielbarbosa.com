import { Box, HStack, Skeleton, Stack, Text, Timeline } from "@chakra-ui/react";
import { SkeletonTimeline } from "./SkeletonTimeline";

export function LearningTimelineSkeleton() {
  const skeletons = Array.from({ length: 10 }).map((_, index) => index);

  return (
    <Timeline.Root size="sm" variant="subtle" colorPalette="fg">
      {skeletons.map((skeleton) => (
        <Timeline.Item key={skeleton}>
          <Timeline.Connector>
            <Timeline.Separator _dark={{ borderColor: "#ffffff14" }} />
            <Timeline.Indicator outline="none" />
          </Timeline.Connector>
          <Timeline.Content>
            <Box display="flex" alignItems="center">
              <Timeline.Title textStyle="lg" mb="2">
                <SkeletonTimeline height="4" w="40" />
              </Timeline.Title>
            </Box>
            <Text mt="-2" fontSize="xs" opacity="70%">
              <SkeletonTimeline height="4" />
            </Text>
            <Timeline.Description>
              <SkeletonTimeline height="4" />
            </Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline.Root>
    // <HStack gap="5">
    //   <Stack flex="1">
    //     <SkeletonTimeline height="5" />
    //     <SkeletonTimeline height="5" width="80%" />
    //   </Stack>
    // </HStack>
  );
}
