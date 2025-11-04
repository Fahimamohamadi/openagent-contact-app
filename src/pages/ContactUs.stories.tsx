import type { Meta, StoryObj } from "@storybook/react";
import ContactUs from "./ContactUs";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof ContactUs> = {
  title: "Pages/ContactUs",
  component: ContactUs,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ContactUs>;

export const Default: Story = {};
