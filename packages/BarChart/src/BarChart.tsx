import * as React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import cx from 'classnames';

import './bar-chart.scss';

export interface DataSet {
  /** Add id for bar chart. */
  id: string | number;
  /** Add label text above the bar chart. */
  label: string;
  /** The value displayed beside the bar chart. */
  value: number;
  /** Add the color to the bar chart. */
  color?: string;
}

export interface BarChartProps extends React.ComponentProps<'li'> {
  /** The data object that will be used for the bar chart. */
  dataSet: DataSet[];
  /** Add a data-test tag for automated tests. */
  dataTest?: string;
  /** Add a specific class to the component. */
  className?: string;
}

const BarChart: React.FunctionComponent<BarChartProps> = ({
  dataSet,
  className,
  dataTest,
  ...rest
}: BarChartProps) => {
  const [animation, setAnimation] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setAnimation(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const setWidth = (value: number): undefined | string => {
    if (!value || value === 0) {
      return undefined;
    }

    const values = dataSet.map((data) => data.value);
    const maxValue = Math.max(...values);

    const size = (value * 100) / maxValue;

    return `${size}%`;
  };

  if (!dataSet) {
    return null;
  }

  const barChart = dataSet.map((item: DataSet) => {
    const { label, value, color, id } = item;

    const animateWidth = value > 0 ? setWidth(item.value) : '';

    const animateList = (
      <li key={id} className="ids-bar-chart" {...rest}>
        <span className="ids-bar-chart__label">{label}</span>
        <div className="ids-bar-chart__content">
          {animation ? (
            <m.div
              className="ids-bar-chart__graph"
              data-value={value}
              initial={{ width: 0 }}
              animate={{
                width: animateWidth,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeIn',
              }}
              style={{
                backgroundColor: color,
              }}
            />
          ) : (
            <div
              className="ids-bar-chart__graph"
              data-value={value}
              style={{
                width: setWidth(value),
                backgroundColor: color,
              }}
            />
          )}
          <span className="ids-bar-chart__value">{value}</span>
        </div>
      </li>
    );

    return item ? animateList : null;
  });

  return (
    <LazyMotion features={domAnimation} strict>
      <ul
        className={cx('ids-bar-chart__container', className)}
        data-test={dataTest}
      >
        {barChart}
      </ul>
    </LazyMotion>
  );
};

export default BarChart;
