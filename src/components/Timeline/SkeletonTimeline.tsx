import { Skeleton, SkeletonProps } from "@chakra-ui/react";

export function SkeletonTimeline({ ...props }: SkeletonProps) {
  return (
    <Skeleton
      _light={{
        bg: "#bfbfbf",
      }}
      _dark={{
        bg: "#ffffff14",
      }}
      {...props}
    />
  );
}
