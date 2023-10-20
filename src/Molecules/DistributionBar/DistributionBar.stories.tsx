import React from 'react';
import styled from 'styled-components';
import { DistributionBar } from './DistributionBar';

import { Flag, Flexbox, Typography, Link, Number, TruncateWithTooltip, Icon } from '../../index';

export default {
  title: 'Molecules / DistributionBar',
};

const StyledFlexbox = styled(Flexbox)`
  min-width: 0;
`;

const StyledImage = styled.img`
  width: 24px;
  border-radius: 50%;
`;

export const Showcase = () => {
  const instrumentList = [
    {
      label: 'Unity Software Inc',
      link: 'linkto',
      country: 'NO',
      weight: 1000,
      currency: 'SEK',
    },
    {
      label: 'Investor B',
      weight: 700,
    },
    {
      label: 'Volvo B',
      link: 'linkto',
      country: 'SE',
      weight: 500,
      currency: 'SEK',
    },
    {
      label: 'Instrument 3',
      country: 'US',
      weight: 0,
      percentage: true,
    },
  ];

  const highestValue = Math.max(...instrumentList.map((instrument) => instrument.weight));

  return (
    <>
      <Flexbox container gap={3} direction="column">
        <Flexbox container item direction="column" gap={1}>
          <Typography>Showcase different properties</Typography>
          {instrumentList.map((item) => {
            return (
              <DistributionBar
                label={
                  item.link ? (
                    <Link to={item.link} color="inherit">
                      {item.label}
                    </Link>
                  ) : (
                    item.label
                  )
                }
                weight={(item.weight / highestValue) * 100}
                avatarComponent={
                  item.country ? <Flag size="m" country={item.country} /> : undefined
                }
              >
                <StyledFlexbox container>
                  <TruncateWithTooltip
                    label={<Number value={item.weight} currency={item.currency} />}
                  >
                    <Typography type="secondary" textAlign="right">
                      <Number
                        value={item.weight}
                        currency={item.currency}
                        percentage={item.percentage}
                      />
                    </Typography>
                  </TruncateWithTooltip>
                </StyledFlexbox>
              </DistributionBar>
            );
          })}
        </Flexbox>

        <Flexbox item>
          <Typography>Custom icon</Typography>
          <DistributionBar
            label="Label"
            weight={10}
            avatarComponent={<Icon.Global16 />}
          ></DistributionBar>
        </Flexbox>
        <Flexbox item container gap={2} direction="column">
          <Typography>Custom large image with adjusted padding</Typography>
          <DistributionBar
            label="Cool cat company"
            weight={0}
            avatarPadding={{ pl: 1 }}
            avatarComponent={
              <Flexbox container alignItems="center" justifyContent="center" height="100%">
                <StyledImage
                  alt="Image of shareville cat"
                  src="https://shareville-static-test.s3.amazonaws.com/img/avatars/cat_120x120.jpg"
                />
              </Flexbox>
            }
          ></DistributionBar>
          <DistributionBar
            label="Tesla"
            weight={60}
            avatarPadding={{ pl: 1 }}
            avatarComponent={
              <Flexbox container alignItems="center" justifyContent="center" height="100%">
                <StyledImage
                  alt="Image of Tesla logo"
                  src="https://cdn.pixabay.com/photo/2022/08/25/00/32/tesla-logo-7408969_1280.png"
                />
              </Flexbox>
            }
          ></DistributionBar>
          <DistributionBar
            label="Apple"
            weight={0}
            avatarPadding={{ pl: 1 }}
            avatarComponent={
              <Flexbox container alignItems="center" justifyContent="center" height="100%">
                <StyledImage
                  alt="Image of Apple logo"
                  src="https://banner2.cleanpng.com/20180330/oke/kisspng-apple-logo-computer-icons-apple-logo-5abdfcd3232e52.3373911715224004671441.jpg"
                />
              </Flexbox>
            }
          ></DistributionBar>
        </Flexbox>

        <Flexbox item>
          <Typography>Link Name</Typography>
          <DistributionBar
            label={
              <Link to="/" color="inherit">
                Link to something
              </Link>
            }
            weight={0}
            avatarComponent={<Flag size="m" country="SE" />}
          ></DistributionBar>
        </Flexbox>

        <Flexbox item>
          <Typography>Truncate name and truncated children</Typography>
          <DistributionBar
            label="Loooooooooooooooooooong naaaaaaaaaaaame"
            weight={0}
            avatarComponent={<Flag size="m" country="SE" />}
          >
            <StyledFlexbox container justifyContent="flex-end">
              <TruncateWithTooltip label={<Number value={10000000000000} currency="SEK" />}>
                <Typography type="secondary" weight="bold" textAlign="right">
                  <Number value={10000000000000} currency="SEK" />
                </Typography>
              </TruncateWithTooltip>
            </StyledFlexbox>
          </DistributionBar>
        </Flexbox>

        <Flexbox item>
          <Typography>Space children</Typography>
          <DistributionBar
            label="Instrument name 1"
            weight={69}
            avatarComponent={<Flag size="m" country="SE" />}
          >
            <Flexbox container width="50%" justifyContent="space-between">
              <Flexbox item>
                <Typography type="secondary">very start</Typography>
              </Flexbox>
              <Flexbox item>
                <Typography type="secondary">very end</Typography>
              </Flexbox>
            </Flexbox>
          </DistributionBar>
        </Flexbox>

        <Flexbox item>
          <Typography>Multiple columns</Typography>
          <DistributionBar
            label="Instrument name 1 Instrument name 1 Instrument name 1 Instrument name 1"
            labelProps={{
              container: true,
              md: {
                gutter: 0,
              },
            }}
            weight={70}
            avatarComponent={<Flag size="m" country="SE" />}
          >
            <Flexbox container>
              <div>GAV</div>
              <div>10%</div>
              <div>Another Column</div>
            </Flexbox>
          </DistributionBar>
        </Flexbox>

        <Flexbox item>
          <Typography>Animation Waterfall</Typography>
          <Flexbox container direction="column" gap={2}>
            {Array.from(Array(10).keys()).map((item, i) => (
              <DistributionBar
                label={`Instrument name ${i + 1}`}
                weight={Math.floor(Math.random() * 101)}
                delay={0 + i / 5}
                avatarComponent={<Flag size="m" country="SE" />}
              >
                <Flexbox container width="81px" justifyContent="flex-end">
                  <Number value={Math.floor(Math.random() * 101)} percentage decimals={2} />
                </Flexbox>
                <Flexbox container width="81px" justifyContent="flex-end">
                  <Number value={Math.floor(Math.random() * 101)} percentage decimals={2} />
                </Flexbox>
              </DistributionBar>
            ))}
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </>
  );
};
