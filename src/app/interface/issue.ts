
import { JComment } from './comment';

/* eslint-disable no-shadow */
export enum IssueType {
  STORY = 'Story',
  TASK = 'Task',
  FIX = 'FIX'
}

export enum IssueStatus {
  TODO = 'To-Do',
  IN_PROGRESS = 'In progress',
  BLOCKED = 'Blocked',
  DONE = 'Done'
}

export const IssueStatusDisplay = {
  [IssueStatus.TODO]: 'To-Do',
  [IssueStatus.IN_PROGRESS]: 'In progress',
  [IssueStatus.BLOCKED]: 'Blocked',
  [IssueStatus.DONE]: 'Done'
};

export enum IssuePriority {
  LOWEST = 'Lowest',
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  HIGHEST = 'Highest'
}

export const IssuePriorityColors = {
  [IssuePriority.HIGHEST]: '#CD1317',
  [IssuePriority.HIGH]: '#E9494A',
  [IssuePriority.MEDIUM]: '#E97F33',
  [IssuePriority.LOW]: '#2D8738',
  [IssuePriority.LOWEST]: '#57A55A'
};
export interface JIssue {
  id: string;
  title: string;
  type: IssueType;
  status: IssueStatus;
  priority: IssuePriority;
  listPosition: number;
  description: string;
  estimate: number;
  timeSpent: number;
  timeRemaining: number;
  createdAt: string;
  updatedAt: string;
  reporterId: string;
  userIds: string[];
  comments: JComment[];
  projectId: string;
}
/* eslint-enable no-shadow */
