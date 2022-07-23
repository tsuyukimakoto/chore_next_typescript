import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Parameters, Story } from "@storybook/react";

export const parameters: Parameters = {
  options: {
    storySort: (a: Story, b: Story) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

const withChakraProvider = (StoryFnction: Function) => {
  return (
    <ChakraProvider>
      <StoryFnction />
    </ChakraProvider>
  );
};

export const decorators = [withChakraProvider];
