import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function timeline(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await notion.dataSources.query({
      data_source_id: process.env.NOTION_DATABASE_ID as string,
    });

    const items = response.results.map((page: any) => {
      const props = page.properties;

      return {
        id: page.id,
        title: props.title.title[0]?.plain_text ?? "",
        date: props.date.date?.start || null,
        categoria: props.categoria.multi_select[0].name || null,
        description: props.description.rich_text[0]?.plain_text ?? "",
      };
    });

    res.status(200).json(items);
  } catch (e) {
    console.error("Failed to fetch Timeline", e);
    return null;
  }
}
