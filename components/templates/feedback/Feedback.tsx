// Package
import { FormEvent, useState } from 'react';
import axios from 'axios';

// Component
import BaseContainer from '../baseContainer/BaseContainer';
import SectionTitle from '../sectionTitle/SectionTitle';

// Interface
export interface IFeedback {
  align?: string;
}

// Main Component
const Feedback: React.FC<IFeedback> = ({ align }) => {
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
    <BaseContainer
      className={`flex w-full flex-col mt-4 ${
        align === 'left' ? '' : 'items-center justify-center text-center'
      }`}
    >
      <SectionTitle
        title="Suggestions"
        subTitle="Let's know how we can improve your planning experience"
      />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="w-full mt-8 bg-gray-100 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600">
          <div className="w-full px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">
              Your feedbacks or feature suggestions
            </label>
            <textarea
              id="comment"
              cols={100}
              rows={8}
              className="w-full px-0 text-gray-800 bg-white border-0 resize-none focus:outline-none text-md dark:bg-gray-800 dark:text-white dark:placeholder-white "
              placeholder="We appreciate all feedbacks and feature suggestions you may have or if you just want to say Hi"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="flex items-center justify-end px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className="px-8 py-3 font-medium text-center text-white bg-blue-600 rounded-md lg:px-10 lg:py-4 hover:bg-blue-800"
            >
              {submitted ? 'Thank you' : 'Send'}
            </button>
          </div>
        </div>
      </form>
    </BaseContainer>
  );
};

export default Feedback;
