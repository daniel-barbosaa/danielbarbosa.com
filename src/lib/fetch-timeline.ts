type LearningJournal = {
  id: string;
  title: string;
  date: string;
  categoria: "Frontend" | "Backend" | "Mobile" | "DevOps" | "Soft Skill";
  description: string;
};

export type TimelineJournalResponse = {
  items: LearningJournal[] | [];
  hasMore: boolean;
};

export async function fetchTimeline(
  page: number,
  perPage: number,
  filter?: string
): Promise<TimelineJournalResponse> {
  const response: LearningJournal[] = await fetch("api/timeline").then((res) =>
    res.json()
  );

  const start = page * perPage;
  const end = start + perPage;

  if (filter) {
    const filtered = response.filter((event) =>
      event.title.toLowerCase().includes(filter?.toLowerCase())
    );
    return {
      items: filtered.slice(start, end),
      hasMore: end < filtered.length,
    };
  }

  return {
    items: response.slice(start, end),
    hasMore: end < response.length,
  };
}
