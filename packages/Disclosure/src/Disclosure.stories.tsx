import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Substract from '@igloo-ui/icons/dist/Substract';
import ArrowUp from '@igloo-ui/icons/dist/ArrowUp';

import Tag from '@igloo-ui/tag';

import readme from '../README.md';

import Disclosure from './Disclosure';

export default {
  title: 'Components/Disclosure',
  component: Disclosure,
  parameters: {
    docs: {
      description: {
        component: readme,
      }
    }
  },
} as Meta<typeof Disclosure>;

export const Overview = {
  args: {
    children: (
      <div style={{ background: '#F7F9FA', padding: '2.4rem' }}>
        Our organization values diversity.
      </div>
    ),
    title: 'Diversity',
    icon: <Substract size="large" />,
    description: (
      <div className="isb-disclosure__desc">
        <Tag
          className="isb-disclosure__desc-tag"
          appearance="success"
          size="xsmall"
          icon={<ArrowUp size="small" />}
        >
          0.8pt
        </Tag>
        In the last 30 days
      </div>
    ),
  },
};

export const Expanded = {
  args: {
    isExpanded: true,
    children: (
      <div style={{ background: '#F7F9FA', padding: '2.4rem' }}>
        This disclosure has the default position set to expanded.
      </div>
    ),
    title: 'Expanded',
    icon: <Substract size="large" />,
  },
};
