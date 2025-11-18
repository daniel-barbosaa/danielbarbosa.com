import { TimelineJournalResponse } from "@/lib/fetch-timeline";
import { formatDate } from "@/utils/format-date";
import { Badge, Box, Text, Timeline } from "@chakra-ui/react";
import { LearningTimelineSkeleton } from "./LearningTimelineSkeleton";
import { useState } from "react";

interface LearnigTimelineProps {
  events?: TimelineJournalResponse;
  isLoading: boolean;
}
export function LearnigTimeline({ events, isLoading }: LearnigTimelineProps) {
  const isEventsEmpty = (events?.items?.length ?? 0) <= 0;

  if (isLoading) {
    return <LearningTimelineSkeleton />;
  }
  return (
    <Timeline.Root size="sm" variant="subtle" colorPalette="fg">
      {isEventsEmpty && <Text>Nenhum resultado encontrado</Text>}

      {!isEventsEmpty && (
        <>
          {events?.items?.map((learning) => (
            <Timeline.Item key={learning.id}>
              <Timeline.Connector>
                <Timeline.Separator _dark={{ borderColor: "#ffffff14" }} />
                <Timeline.Indicator outline="none" />
              </Timeline.Connector>

              <Timeline.Content>
                <Box display="flex" alignItems="center">
                  <Timeline.Title textStyle="lg">
                    {learning.title}
                  </Timeline.Title>

                  <Badge size="xs" marginLeft="5" variant="surface">
                    {learning.categoria}
                  </Badge>
                </Box>

                <Text mt="-2" fontSize="xs" opacity="70%">
                  {formatDate(learning.date) ?? learning.date}
                </Text>

                <Timeline.Description>
                  <Text textStyle="sm">{learning.description}</Text>
                </Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </>
      )}
    </Timeline.Root>
  );
}
