import { Container, Grid, Text } from '@mantine/core';
import { m } from 'framer-motion';

export default function LandingWhyChooseUs() {
  return (
    <Container className='' size='xl'>
      <Grid className='mt-28 mb-[150px] overflow-hidden align-middle'>
        <Grid.Col md={6} className='h-[600px] flex flex-col justify-center'>
          <Text className='mb-8 xs:text-4xl sm:text-5xl font-extrabold leading-[1.25] text-left'>
            What make Stocksphi <span className='text-brand-yellow'>different?</span> <br />{' '}
          </Text>

          <Text className='mb-8 text-lg font-semibold text-left'>
            Our AI is constantly learning and improving. And Constantly scanning the crypto, forex and stock market for apportunities 24/7.
            <br></br>
            <Text>You can rest and we'll do the hard work for you.</Text>
          </Text>

          <Text className='max-w-lg mb-1 text-2xl font-bold text-left'>Download</Text>
          <Text className='max-w-lg mb-8 text-left'>Install the Stocksphi App from Google Play, Apple Appstore or use our webapp</Text>

          <Text className='max-w-lg mb-1 text-2xl font-bold text-left'>Choose</Text>
          <Text className='max-w-lg mb-8 text-left'>
            Select a subscription that's right for you! All subscription give access to Forex, Crypto, Stocks signals
          </Text>

          <Text className='max-w-lg mb-1 text-2xl font-bold text-left'>Choose</Text>
          <Text className='max-w-lg mb-8 text-left'>
            Select a subscription that's right for you! All subscription give access to Forex, Crypto, Stocks signals
          </Text>
        </Grid.Col>

        <Grid.Col md={6} className='h-[580px]'>
          <div className='flex h-36 xs:justify-center sm:justify-end'>
            <img src='/images/hero-iphone.png' className='h-[580px]' />
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
