import { useMutation, useQuery } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import { getFeedbacks, sendFeedback } from '@features/feedback/feedback.service';
import type {
  FeedbackType,
  IFeedback,
  IFeedbackResponse,
} from '@features/feedback/feedback.entity';

export const useCreateFeedback = () => {
  return useMutation<AxiosResponse, Error, { feedback: IFeedback; key: FeedbackType }>(
    (query) => {
      return sendFeedback(query.feedback, query.key);
    },
  );
};

export const useFeedbacks = (value: string, key: FeedbackType) => {
  return useQuery<IFeedbackResponse[], Error>(['feedbacks', key], async () => {
    const { data: carsLikes } = await getFeedbacks(value, key);
    return carsLikes;
  });
};
