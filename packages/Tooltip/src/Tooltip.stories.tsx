import React from 'react';
import isChromatic from 'chromatic/isChromatic';

import { Meta } from '@storybook/react';

import Tooltip, { TooltipProps } from './Tooltip';
import Button from '@igloo-ui/button';
import Modal from '@igloo-ui/modal';

import ChromaticWrapper from '@components/chromaticWrapper';
import Section from '@components/section';
import readme from '../README.md';

const tooltipContent = 'Lorem ipsum dolor';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    },
    chromatic: { disableSnapshot: true },
  },
  args: {
    children: 'Playground tooltip',
    content: tooltipContent,
    maxWidth: 200,
  },
  argTypes: {
    children: { control: 'text' },
    content: {
      control: 'text',
    },
    position: { table: { defaultValue: { summary: 'auto' } } },
    appearance: { table: { defaultValue: { summary: 'dark' } } },
    maxWidth: {
      table: { defaultValue: { summary: 200 } },
      control: 'number',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          fontSize: '1.6rem',
          paddingTop: 40,
          paddingBottom: 40,
          paddingRight: 50,
          paddingLeft: 60,
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta<typeof Tooltip>;

export const Overview = {
  render: (args: TooltipProps) => (
    <Tooltip content={tooltipContent} {...args} />
  ),
};

export const Appearances = {
  render: () => (
    <ChromaticWrapper>
      <Section>
        <Tooltip
          active={isChromatic()}
          content={tooltipContent}
          appearance="dark"
        >
          Dark
        </Tooltip>
        <Tooltip
          active={isChromatic()}
          position={isChromatic() ? 'bottom' : 'auto'}
          content={tooltipContent}
          appearance="light"
        >
          Light
        </Tooltip>
      </Section>
    </ChromaticWrapper>
  ),

  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export const Position = () => (
  <Section>
    <Tooltip content={tooltipContent} position="top">
      Top
    </Tooltip>
    <Tooltip content={tooltipContent} position="right">
      Right
    </Tooltip>
    <Tooltip content={tooltipContent} position="bottom">
      Bottom
    </Tooltip>
    <Tooltip content={tooltipContent} position="left">
      Left
    </Tooltip>
  </Section>
);

export const DisabledButton = () => (
  <Section>
    <Tooltip content="Please complete all fields">
      <Button appearance="secondary" disabled>
        Update profile
      </Button>
    </Tooltip>
  </Section>
);

export const TooltipInAModal = () => {
  const [show, setShow] = React.useState(false);

  return (
    <Section>
      <Button onClick={() => setShow(true)}>open</Button>
      <Modal isDismissable isOpen={show} onClose={() => setShow(false)}>
        <Tooltip content="Please complete all fields">
          <Button>Update profile</Button>
        </Tooltip>
      </Modal>
    </Section>
  );
};
