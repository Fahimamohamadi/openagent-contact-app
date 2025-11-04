import type { Meta, StoryObj } from "@storybook/react";
import ThankYouPage from "./ThankYouPage";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof ThankYouPage> = {
  title: "Pages/ThankYouPage",
  component: ThankYouPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThankYouPage>;

export const Default: Story = {};
