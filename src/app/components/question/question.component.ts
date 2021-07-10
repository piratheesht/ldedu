import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  questions: Question[] = [
    { id: 1, type: 1, text: 'இன்று சுவிஸ் பல்கலைக்கழகங்களுக்கான மருத்துவ மாணவர்களுக்கான அனுமதிப்பரீட்சை ( றீட் பரீட்சை) நடைபெற்றது', pictureUrl: '', answers: [{ id: 1, text: 'சுவிஸ்', explanation: 'xxx' }, { id: 2, text: 'சுவிஸ்', explanation: 'xxx' }, { id: 3, text: 'சுவிஸ்', explanation: 'xxx' }] },
    { id: 2, type: 1, text: 'இன்று சுவிஸ் பல்கலைக்கழகங்களுக்கான மருத்துவ மாணவர்களுக்கான அனுமதிப்பரீட்சை ( றீட் பரீட்சை) நடைபெற்றது', pictureUrl: '', answers: [{ id: 1, text: 'சுவிஸ்', explanation: 'xxx' }, { id: 2, text: 'சுவிஸ்', explanation: 'xxx' }, { id: 3, text: 'சுவிஸ்', explanation: 'xxx' }] },
    { id: 3, type: 1, text: 'இன்று சுவிஸ் பல்கலைக்கழகங்களுக்கான மருத்துவ மாணவர்களுக்கான அனுமதிப்பரீட்சை ( றீட் பரீட்சை) நடைபெற்றது', pictureUrl: '', answers: [{ id: 1, text: 'சுவிஸ்', explanation: 'xxx' }, { id: 2, text: 'சுவிஸ்', explanation: 'xxx' }, { id: 3, text: 'சுவிஸ்', explanation: 'xxx' }] },
  ];


  constructor() { }

  ngOnInit(): void {


  }

}
