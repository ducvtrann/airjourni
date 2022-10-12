// Package
import axios from 'axios';
import { FormEvent, useState } from 'react';
import { Button, Container, Stack } from '@mui/material';

// Component
import SectionTitle from './SectionTitle';

// Main
const Feedback: React.FC = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const resetState = () => {
    setSubmitted(false);
    setMessage('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(!submitted);

    try {
      const response = await axios.post('/api/feedback', {
        message,
      });

      if (response.status === 200) {
        setTimeout(() => {
          resetState();
        }, 1000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mb: 3 }}>
      <SectionTitle
        title="Suggestions"
        subTitle="Let's know how we can improve your planning experience"
      />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Stack direction="column">
          <textarea
            id="comment"
            cols={100}
            rows={8}
            placeholder="We appreciate all feedbacks and feature suggestions you may have or if you just want to say Hi"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>

          <Button variant="contained" type="submit">
            {submitted ? 'Thank you' : 'Send'}
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Feedback;
