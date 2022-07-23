import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ImageCard from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ImageCard",
  component: ImageCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ImageCard>;

export const Primary: ComponentStory<typeof ImageCard> = () => (
  <div>
    <ImageCard />
  </div>
);
