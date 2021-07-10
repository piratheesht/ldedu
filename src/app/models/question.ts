import { Answer } from './answer';
export class Question {
    id!: number;
    type!: number;
    text!: string;
    pictureUrl!: string;
    answers!: Answer[];
}