import {
  FIELD_NAMES,
  TOKEN,
} from '../constants';

import { getRandomElement, getTextTemplates } from '../helpers';


// Action types
// ----------------------------------------------------------------------------

export const SUBMIT_FIELD = 'MADLIBS.SUBMIT_FIELD';
export const EDIT_ESSAY = 'MADLIBS.EDIT_ESSAY';
export const UPDATE_ESSAY_TEXT = 'MADLIBS.UPDATE_ESSAY_TEXT';
export const RESET = 'MADLIBS.RESET';


// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.music,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.bar,
  ],

  fieldAnswers: {},
  essayText: '',
  isEditingEssay: false,
};


// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SUBMIT_FIELD: {
      // remove answer from state when field is empty
      if (payload.answer.length === 0) {
        const fieldAnswers = {
          ...state.fieldAnswers,
        };

        delete fieldAnswers[payload.fieldName];

        return {
          ...state,
          fieldAnswers,
        };
      }

      const fieldAnswer = state.fieldAnswers[payload.fieldName];

      // do not change state when answer hasn't change
      if (fieldAnswer && fieldAnswer.answer === payload.answer) {
        return state;
      }

      // update given field with new template text and answer
      const fieldAnswers = {
        ...state.fieldAnswers,
        [payload.fieldName]: {
          template: getRandomElement(getTextTemplates(payload.fieldName)),
          answer: payload.answer,
        },
      };

      const essayText = state
        .fieldOrder
        // filter out unanswered fields
        .filter((fieldName) => fieldName in fieldAnswers)
        .map((fieldName) => {
          const { template, answer } = fieldAnswers[fieldName];
          return template.replace(TOKEN, answer);
        })
        .join(' ');

      return {
        ...state,
        fieldAnswers,
        essayText,
      };
    }

    case EDIT_ESSAY: {
      return {
        ...state,
        isEditingEssay: true,
      };
    }

    case UPDATE_ESSAY_TEXT: {
      return {
        ...state,
        essayText: payload,
      };
    }

    case RESET: {
      return INITIAL_STATE;
    }

    default:
      return state;
  }
}


// Action creators
// ----------------------------------------------------------------------------

export function submitField({ id, answer = '' }) {
  return { type: SUBMIT_FIELD, payload: { fieldName: id, answer } };
}

export function editEssay() {
  return { type: EDIT_ESSAY };
}

export function updateEssayText(text) {
  return { type: UPDATE_ESSAY_TEXT, payload: text };
}

export function reset() {
  return { type: RESET };
}
