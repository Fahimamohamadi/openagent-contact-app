import type { Meta, StoryObj } from "@storybook/react";
import ContactsList from "./ContactsList";

const meta: Meta<typeof ContactsList> = {
  title: "Pages/ContactsList",
  component: ContactsList,
};

export default meta;
type Story = StoryObj<typeof ContactsList>;

export const Default: Story = {};