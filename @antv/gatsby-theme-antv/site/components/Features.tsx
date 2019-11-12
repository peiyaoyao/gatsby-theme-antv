import React from 'react';
import { Row, Col } from 'antd';
import classNames from 'classnames';
import FeatureCard from './FeatureCard';
import styles from './Features.module.less';

interface Card {
  icon: string;
  title: string;
  description: string;
}
interface FeaturesProps {
  title?: string;
  features: Card[];
  className?: string;
  style?: React.CSSProperties;
}

const Features: React.FC<FeaturesProps> = ({
  title,
  features = [],
  className,
  style,
}) => {
  const getCards = () => {
    const children = features.map(card => {
      return (
        <Col className={styles.cardWrapper} key={card.title} md={8} xs={24}>
          <FeatureCard {...card} />
        </Col>
      );
    });
    return children;
  };

  const getSlicers = () => {
    const slicers = [];
    const slicerNum = features.length - 1;
    for (let i = 0; i < slicerNum; i++) {
      const left = `${(0.878 * 0.3333 * (i + 1) + 0.04) * 100}%`;
      slicers.push(
        <div key={i} className={styles.divider} style={{ marginLeft: left }} />,
      );
    }
    return slicers;
  };

  // for small screen
  const getDots = () => {
    let dots: Array<Object> = [];
    const length = features.length;
    const startTop = 45;
    const cardHeight = 350;
    const startLeftPercent = 0.028;
    const rows = length + 1;
    for (let i = 0; i < rows; i++) {
      let yOffset = 1;
      let top = `${startTop + cardHeight * i - yOffset}px`;
      let leftColLeft = `${startLeftPercent * 100}%`;
      let rigthColLeft = `${(startLeftPercent + 0.892) * 100}%`;
      dots.push(
        <div
          key={`${i}-0`}
          className={styles.dot}
          style={{ marginLeft: leftColLeft, marginTop: top }}
        />,
      );
      dots.push(
        <div
          key={`${i}-1`}
          className={styles.dot}
          style={{ marginLeft: rigthColLeft, marginTop: top }}
        />,
      );
    }

    return dots;
  };

  return (
    <div className={classNames(styles.wrapper, className)} style={style}>
      {title ? (
        <div className={classNames(styles.lefttopWithTitle, styles.lefttop)} />
      ) : (
        <div
          className={classNames(styles.lefttopWithoutTitle, styles.lefttop)}
        />
      )}
      <div className={styles.content}>
        <div key="content">
          <p key="title" className={styles.title}>
            {title}
          </p>
          <div key="block" className={styles.rightbottom}>
            <div
              className={classNames(
                styles.slicerbar,
                styles.slicerbarv,
                styles.slicerbarv1,
              )}
            />
            <div
              className={classNames(
                styles.slicerbar,
                styles.slicerbarv,
                styles.slicerbarv2,
              )}
            />
            <div
              className={classNames(
                styles.slicerbar,
                styles.slicerbarh,
                styles.slicerbarh1,
              )}
            />
            <div
              className={classNames(
                styles.slicerbar,
                styles.slicerbarh,
                styles.slicerbarh2,
              )}
            />
            <div
              className={classNames(
                styles.slicerbar,
                styles.slicerbarh,
                styles.slicerbarh3,
              )}
            />
            <div
              className={classNames(
                styles.slicerbar,
                styles.slicerbarh,
                styles.slicerbarh4,
              )}
            />
            {getSlicers()}
            {getDots()}
            <Row key="cards" className={styles.cards}>
              {getCards()}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;