import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
    engIpa: {
        exercises: [
            {
                given: 'Beet', 
                answer: 'dɪfθɑŋ', 
                value: ''
            },
            {
                given: 'Bit', 
                answer: 'a', 
                value: ''
            },
            {
                given: 'Bet', 
                answer: 'a', 
                value: ''
            },
            {
                given: 'Bait', 
                answer: 'a', 
                value: ''
            },
            {
                given: 'Boot', 
                answer: 'a', 
                value: ''
            }
        ],
        totalCorrect: 0,
        validAnswers: false,
        showScore: false
    },
    ipaEng: {
        exercises: [
            {
                given: '[frɪkəɾɪv]', 
                answer: 'a', 
                value: ''
            },
            {
                given: '[fənɛɾɪks]', 
                answer: 'a', 
                value: ''
            },
            {
                given: '[dɪfθɑŋ]', 
                answer: 'a', 
                value: ''
            },
            {
                given: '[ælfəbɛt]', 
                answer: 'a', 
                value: ''
            },
            {
                given: '[vokəltɹækt]', 
                answer: 'a', 
                value: ''
            }
        ],
        totalCorrect: 0,
        validAnswers: false,
        showScore: false
    },
    videoIpa: {
        exercises: [
            {
                url: 'https://www.youtube.com/watch?v=FwNFlOpu9aM', 
                answer: 'a', 
                value: ''
            },
            {
                url: 'https://www.youtube.com/watch?v=FwNFlOpu9aM', 
                answer: 'a', 
                value: ''
            },
            {
                url: 'https://www.youtube.com/watch?v=FwNFlOpu9aM', 
                answer: 'a', 
                value: ''
            },
            {
                url: 'https://www.youtube.com/watch?v=FwNFlOpu9aM', 
                answer: 'a', 
                value: ''
            },
            {
                url: 'https://www.youtube.com/watch?v=FwNFlOpu9aM', 
                answer: 'a', 
                value: ''
            }
        ],
        totalCorrect: 0,
        validAnswers: false,
        showScore: false
    }
};

const engIpaInputChanged = (state, action) => {
    const updatedExercise = updateObject(state.engIpa.exercises[action.inputIndex], {
        value: action.value,
    });
    const updatedExercises = state.engIpa.exercises.map((exercise) => {
        return {...exercise}
    });
    updatedExercises[action.inputIndex] = updatedExercise;

    let validAnswers = true;
    updatedExercises.forEach((exercise) => {
        if(exercise.value.length === 0){
            validAnswers = false;
        }
    });
    const showScore = !validAnswers ? false : state.engIpa.showScore;

    return updateObject(state, {
        engIpa: updateObject(state.engIpa, {
            exercises: updatedExercises, 
            validAnswers: validAnswers, 
            showScore: showScore
        })
    });
};

const engIpaCheckScore = (state, action) => {
    let score = 0;
    state.engIpa.exercises.forEach((exercise) => {
        if(exercise.value === exercise.answer){
            score++;
        }
    });
    return updateObject(state, {
        engIpa: updateObject(state.engIpa, {
            totalCorrect: score, 
            showScore: true
        })
    });
}

const ipaEngInputChanged = (state, action) => {
    const updatedExercise = updateObject(state.ipaEng.exercises[action.inputIndex], {
        value: action.value,
    });
    const updatedExercises = state.ipaEng.exercises.map((exercise) => {
        return {...exercise}
    });
    updatedExercises[action.inputIndex] = updatedExercise;

    let validAnswers = true;
    updatedExercises.forEach((exercise) => {
        if(exercise.value.length === 0){
            validAnswers = false;
        }
    });
    const showScore = !validAnswers ? false : state.ipaEng.showScore;

    return updateObject(state, {
        ipaEng: updateObject(state.ipaEng, {
            exercises: updatedExercises, 
            validAnswers: validAnswers, 
            showScore: showScore
        })
    });
};

const ipaEngCheckScore = (state, action) => {
    let score = 0;
    state.ipaEng.exercises.forEach((exercise) => {
        if(exercise.value === exercise.answer){
            score++;
        }
    });
    return updateObject(state, {
        ipaEng: updateObject(state.ipaEng, {
            totalCorrect: score, 
            showScore: true
        })
    });
}

const videoIpaInputChanged = (state, action) => {
    const updatedExercise = updateObject(state.videoIpa.exercises[action.inputIndex], {
        value: action.value,
    });
    const updatedExercises = state.videoIpa.exercises.map((exercise) => {
        return {...exercise}
    });
    updatedExercises[action.inputIndex] = updatedExercise;

    let validAnswers = true;
    updatedExercises.forEach((exercise) => {
        if(exercise.value.length === 0){
            validAnswers = false;
        }
    });
    const showScore = !validAnswers ? false : state.videoIpa.showScore;

    return updateObject(state, {
        videoIpa: updateObject(state.videoIpa, {
            exercises: updatedExercises, 
            validAnswers: validAnswers, 
            showScore: showScore
        })
    });
};

const videoIpaCheckScore = (state, action) => {
    let score = 0;
    state.videoIpa.exercises.forEach((exercise) => {
        if(exercise.value === exercise.answer){
            score++;
        }
    });
    return updateObject(state, {
        videoIpa: updateObject(state.videoIpa, {
            totalCorrect: score, 
            showScore: true
        })
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ENG_IPA_INPUT_CHANGED: return engIpaInputChanged(state, action);
        case actionTypes.ENG_IPA_CHECK_SCORE: return engIpaCheckScore(state, action);
        case actionTypes.IPA_ENG_INPUT_CHANGED: return ipaEngInputChanged(state, action);
        case actionTypes.IPA_ENG_CHECK_SCORE: return ipaEngCheckScore(state, action);
        case actionTypes.VIDEO_IPA_INPUT_CHANGED: return videoIpaInputChanged(state, action);
        case actionTypes.VIDEO_IPA_CHECK_SCORE: return videoIpaCheckScore(state, action);
        default: return state;
    }
};

export default reducer;