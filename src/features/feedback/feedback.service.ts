import type { AxiosResponse } from 'axios';
import { requestService } from '@infrastructure/request';
import type { FeedbackType, IFeedback } from '@features/feedback/feedback.entity';

export const sendFeedback = async (
  feedback: IFeedback,
  key: FeedbackType,
): Promise<AxiosResponse> => {
  return await requestService.post('feedbacks', feedback, {
    params: { key: key },
  });
};

export const getFeedbacks = async (
  value: string,
  key: FeedbackType,
): Promise<AxiosResponse> => {
  return await requestService.get('feedbacks', {
    params: { key: key, value: value },
  });
};
