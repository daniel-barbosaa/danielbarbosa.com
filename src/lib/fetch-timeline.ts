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
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/timeline`
  ).then((res) => res.json());

  const list: LearningJournal[] = Array.isArray(response) ? response : [];

  const start = page * perPage;
  const end = start + perPage;

  const filteredList = filter
    ? list.filter((event) =>
        event.title.toLowerCase().includes(filter.toLowerCase())
      )
    : list;

  return {
    items: filteredList.slice(start, end),
    hasMore: end < filteredList.length,
  };
}
