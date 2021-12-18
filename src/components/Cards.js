import React from 'react';
import styled, { keyframes } from 'styled-components';

const SectionHeading = styled.h2`
color: #fff;
`;

const Card = styled.div`
border-radius: 16px;
border: 1px solid rgba(43, 43, 43, 0.568);
position: relative;
margin: 15px;
padding: 15px;
overflow: hidden;


&:before {
  position: absolute;
  content: '';
  background: inherit;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-shadow: inset 0 0 0 3000px rgba(150, 150, 150, 0.192);
  filter: blur(40px);
  border-radius: 15px;
  margin: -20px;
}
`;

const Wrapper = styled.div`
padding: 15px;

`;

const Flex = styled.div`
display: flex;
`;

const ViewMoreBtn = styled.h5`
text-align: right;
cursor: pointer;
text-decoration: underline;
`;

const CardContent = styled.div`
position: relative;
width: 100%;
z-index: 2;
`;

const CardItem = styled.div`
display: flex;
align-items: center;
margin-top: 15px;
`;

const ItemImage = styled.img`
width: 48px;
height: 48px;
border-radius: 6px;
`;

const ItemTitle = styled.h4`
margin-left: 30px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
max-width: 15ch;
`;

const ItemPrice = styled.p`
margin-left: 30px;
margin-top: 5px;
`;

const SmallText = styled.span`
font-size: 12px;
font-weight: bold;
`;

const Section = styled.section`
margin-top: 45px;
`;

const test = () => {
  console.log('hello');
};

const Cards = () => {
  return (
    <Wrapper>
      <Section>
        <SectionHeading>Top Sales</SectionHeading>
        <Card>
          <CardContent>
            <ViewMoreBtn onClick={test}>View More</ViewMoreBtn>

            <CardItem>
              <ItemImage src="https://public.nftstatic.com/static/nft/zipped/5d1d240c84d948149cdcf3b41068b69d_zipped.png" />

              <div>
                <ItemTitle>Brawler_025_The_Red_Giant</ItemTitle>
                <ItemPrice>
                  Price: <SmallText> 100,000.00 BUSD </SmallText>
                </ItemPrice>
              </div>
            </CardItem>

            <CardItem>
              <ItemImage src="https://public.nftstatic.com/static/nft/zipped/7781a080faca4c759fa940a655b71ba6_zipped.png" />

              <div>
                <ItemTitle>Brawler_025_The_Red_Giant</ItemTitle>
                <ItemPrice>
                  Price: <SmallText> 100,000.00 BUSD </SmallText>
                </ItemPrice>
              </div>
            </CardItem>

            <CardItem>
              <ItemImage src="	https://public.nftstatic.com/static/nft/zipped/16c94d761df147d693c51b555cb7ad03_zipped.png" />

              <div>
                <ItemTitle>Brawler_025_The_Red_Giant</ItemTitle>
                <ItemPrice>
                  Price: <SmallText> 100,000.00 BUSD </SmallText>
                </ItemPrice>
              </div>
            </CardItem>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <SectionHeading>Top Collections</SectionHeading>
        <Card>
          <CardContent>
            <ViewMoreBtn onClick={test}>View More</ViewMoreBtn>

            <CardItem>
              <ItemImage src="	https://public.nftstatic.com/static/nft/zipped/9e274ac0a73b4eca8c3795188a8433c2_zipped.png" />

              <div>
                <ItemTitle>Brawler_025_The_Red_Giant</ItemTitle>
                <ItemPrice>
                  Price: <SmallText> 100,000.00 BUSD </SmallText>
                </ItemPrice>
              </div>
            </CardItem>

            <CardItem>
              <ItemImage src="	https://public.nftstatic.com/static/nft/zipped/57c5a900547b4b3cbce7d56b063166b3_zipped.png" />

              <div>
                <ItemTitle>Brawler_025_The_Red_Giant</ItemTitle>
                <ItemPrice>
                  Price: <SmallText> 100,000.00 BUSD </SmallText>
                </ItemPrice>
              </div>
            </CardItem>

            <CardItem>
              <ItemImage src="		https://public.nftstatic.com/static/nft/zipped/e8ef50c91c2a4d9a9f4984690efef5f8_zipped.png" />

              <div>
                <ItemTitle>Brawler_025_The_Red_Giant</ItemTitle>
                <ItemPrice>
                  Price: <SmallText> 100,000.00 BUSD </SmallText>
                </ItemPrice>
              </div>
            </CardItem>
          </CardContent>
        </Card>
      </Section>
    </Wrapper>
  );
};

export default Cards;
